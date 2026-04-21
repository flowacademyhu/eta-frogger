const defaultStudents = [
  'Laura', 'Lius', 'Nina', 'Vince', 'Adél', 'Bianka', 'Marci', 'Gréta', 'Lenke', 'Mózes',
  'M.Ádám', 'Ny.Ádám', 'Borisz', 'Anna', 'Nati', 'Mása', 'Dani', 'Lackó', 'Eszter', 'Lujza',
  'Mirkó', 'Leslie',
];

export function StudentManagementPage() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-amber-300">Tanulók kezelése</h2>
      <button className="my-4 rounded bg-academy-green px-4 py-2">tanulok.txt import (22 fő)</button>
      <ul className="grid gap-2 md:grid-cols-2">
        {defaultStudents.map((student) => (
          <li key={student} className="rounded border border-amber-100/30 bg-slate-900/60 p-3">
            {student}
          </li>
        ))}
      </ul>
    </section>
  );
}
