import { onCall } from 'firebase-functions/v2/https';

export const verifyPin = onCall(async () => {
  return { ok: true, next: 'Implement in Phase 1 with rate limiting + bcrypt compare' };
});

export const importStudents = onCall(async () => {
  return { ok: true, next: 'Import tanulok.txt and create student records + hashed PIN' };
});

export const regenerateStudentPin = onCall(async () => {
  return { ok: true, next: 'Regenerate PIN + update hash + invalidate previous attempts' };
});

export const generateQrPinCardsPdf = onCall(async () => {
  return { ok: true, next: 'Generate printable PDF cards with name + PIN + QR url' };
});
