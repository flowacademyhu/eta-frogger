import { useState } from 'react';

export function LoginPage() {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');

  return (
    <section className="mx-auto mt-16 max-w-md rounded-xl border border-amber-300/30 bg-slate-900/70 p-6 shadow-xl">
      <h2 className="mb-4 text-2xl font-semibold text-amber-300">Belépés a Fantasy Akadémiára</h2>
      <div className="space-y-3">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Név"
          className="w-full rounded border border-slate-600 bg-slate-950 p-2"
        />
        <input
          value={pin}
          onChange={(event) => setPin(event.target.value)}
          placeholder="4 számjegyű PIN"
          className="w-full rounded border border-slate-600 bg-slate-950 p-2"
        />
        <button className="w-full rounded bg-academy-violet px-4 py-2 font-medium">Belépés (Cloud Function hívás)</button>
      </div>
    </section>
  );
}
