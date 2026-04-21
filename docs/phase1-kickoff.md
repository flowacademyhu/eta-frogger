# Fantasy Akadémia – fejlesztési indítás (1. fázis kickoff)

## 1) Rövid, végrehajtható projektösszefoglaló
- Cél: Firebase-alapú matematika gyakorló platform 6. osztálynak, fantasy tematikával.
- Frontend: React + Tailwind, role-based nézetek (tanítvány, mester).
- Backend: Cloud Functions (minden kritikus logika szerveren), Firestore adattárolás.
- 1. kiadás kész akkor, ha mind a 6 altémához működő feladatgenerátor + ellenőrző van (3. és 5. fázis).
- Most: 1. fázis indulás, biztonságos login + alap admin tanulókezelés + QR PIN-kártya PDF.

## 2) Végleges döntések (lezárt)
- Stack fix: React, Tailwind, Firestore, Firebase Hosting, Cloud Functions.
- Fő témakör fix: arányosság, 6 altémával.
- Szerepkör fix: tanítvány és mester/admin.
- PIN fix: 4 számjegy, bcrypt hash, ellenőrzés csak functionben, rate limit kötelező.
- UI fogalmak fixek: Fantasy Akadémia, varázs-piactér, tarisznya, Felfedező/Kalandor/Bajnok.
- XP, streak, szintlépés/szintcsökkenés és padlószabály fix.
- Minden érzékeny művelet kizárólag Cloud Functions mögött.

## 3) Blokkoló kérdések (max 3)
1. A tanári belépés módja legyen Google SSO (Firebase Auth provider), vagy fix admin fiók email+jelszóval?
2. A diákok PIN belépése után kapjanak Firebase custom tokent (anon user + custom claim), vagy session-szerű HTTP-only cookie-t?
3. A `tanulok.txt` formátuma pontosan mi lesz (soronként csak név, vagy név;osztály;azonosító)?

> Alapértelmezés addig: tanár email+jelszó, diák custom token, `tanulok.txt` soronként név.

## 4) Konkrét 1. fázis implementációs terv
- 1. lépés: Firebase projekt + Hosting/Functions/Firestore alapkonfig.
- 2. lépés: Auth modell (tanár auth provider + diák PIN alapú function login flow).
- 3. lépés: Firestore kollekciók létrehozása + minimális indexek.
- 4. lépés: React route váz + role-guard + fantasy shell.
- 5. lépés: Tanulókezelő oldal (import trigger, PIN regen trigger).
- 6. lépés: QR-kártya PDF function (név + PIN + QR link).
- 7. lépés: Security rules deny-by-default + role read policy.

## 5) Firestore séma (v1)

### `users/{uid}`
- `role`: `'student' | 'teacher' | 'admin'`
- `studentId?`: string
- `displayName`: string
- `createdAt`: timestamp
- `lastLoginAt`: timestamp

### `students/{studentId}`
- `name`: string
- `pinHash`: string (bcrypt)
- `pinUpdatedAt`: timestamp
- `status`: `'active' | 'archived'`
- `level`: `'felfedezo' | 'kalandor' | 'bajnok'`
- `difficultyBias`: `'easy' | 'medium' | 'hard'`
- `xpBalance`: number
- `streakCorrectNoHelp`: number
- `streakWrong`: number
- `floorModeUntilCorrect`: boolean
- `createdAt`: timestamp

### `practiceSessions/{sessionId}`
- `studentUid`: string
- `mode`: `'practice' | 'assessment'`
- `subtopic`: `'ratio' | 'proportional_division' | 'direct_proportion' | 'percentage_value' | 'word_problems' | 'open_sentences'`
- `taskId`: string
- `difficulty`: `'easy' | 'medium' | 'hard'`
- `helpUsed`: `'none' | 'leading' | 'concrete' | 'both'`
- `isCorrect`: boolean
- `xpAwarded`: number
- `openedAt`: timestamp
- `submittedAt`: timestamp
- `activeMsCapped`: number

### `inventory/{studentId}/items/{itemId}`
- `rewardType`: `'orarai_ot' | 'dolgozatpont' | 'szabad_hely' | 'egyeb'`
- `status`: `'active' | 'pending' | 'approved' | 'used' | 'recorded'`
- `costXp`: number
- `createdAt`: timestamp

### `marketItems/{itemId}`
- `name`: string
- `type`: string
- `costXp`: number
- `constraints`: map
- `isActive`: boolean

### `statistics/{docId}`
- aggregált admin nézethez előkészített snapshotok

## 6) Fő route-ok és oldalak
- `/belepes` – közös login (tanár + tanítvány PIN)
- `/tanitvany` – saját XP + ranghely
- `/tanitvany/gyakorlas` – feladatnézet (későbbi fázisok)
- `/tanitvany/piac` – varázs-piactér
- `/tanitvany/tarisznya` – inventory
- `/mester` – admin dashboard
- `/mester/tanulok` – import, PIN regen
- `/mester/qr-kartyak` – PDF export indítása

## 7) Fő React komponensek
- `AppShell` – globális fantasy layout + nav
- `LoginPage` – név/PIN és tanár auth belépés UI
- `StudentDashboardPage` – saját XP/rang
- `StudentManagementPage` – tanulólista + import gomb
- `QrCardsPage` – PDF generáló trigger
- `PracticePage`, `MarketPage`, `InventoryPage` – fázisokhoz scaffold
- `AuthContext` – kliens oldali auth/session állapot

## 8) Szükséges Cloud Functions lista
- `verifyPin` – PIN ellenőrzés, rate limit, custom token/session
- `importStudents` – `tanulok.txt` beolvasás + tanuló dokumentumok + PIN hash
- `regenerateStudentPin` – új PIN, hash csere, audit
- `generateQrPinCardsPdf` – nyomtatható PDF (név, PIN, QR)
- (előkészítve későbbre) `generateTask`, `submitAnswer`, `purchaseMarketItem`, `updateRewardStatus`, `getAdminStats`, `recordAssessmentScore`

## 9) Firebase security logika alapjai
- Deny-by-default.
- Közvetlen kliens írás tiltva a kritikus kollekciókba.
- Tanítvány csak saját olvasás (profil, inventory, saját session eredmények).
- Admin olvashat mindent, írni továbbra is functionön keresztül.
- Role custom claim (`role`, `studentId`) alapú hozzáférés.

## 10) Elindított 1. fázis kódstruktúra
- Monorepo váz: `app/` (React), `functions/` (Cloud Functions TS).
- Firebase konfiguráció és Firestore rules/index fájlok létrehozva.
- Route- és oldal-scaffold létrehozva a 1–2. fázis következő lépéseihez.
- 1. fázis kulcs function stubok létrehozva.
