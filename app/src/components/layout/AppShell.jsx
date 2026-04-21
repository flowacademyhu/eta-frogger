import { NavLink, Outlet } from 'react-router-dom';

const links = [
  { to: '/tanitvany', label: 'Tanítvány' },
  { to: '/tanitvany/gyakorlas', label: 'Gyakorlás' },
  { to: '/tanitvany/piac', label: 'Varázs-piactér' },
  { to: '/tanitvany/tarisznya', label: 'Tarisznya' },
  { to: '/mester', label: 'Mester' },
];

export function AppShell() {
  return (
    <div className="min-h-screen text-slate-50">
      <header className="border-b border-amber-300/30 bg-academy-green/70 p-4 backdrop-blur">
        <h1 className="text-xl font-bold text-amber-300">Fantasy Akadémia</h1>
        <nav className="mt-3 flex flex-wrap gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="rounded border border-amber-200/40 px-3 py-1 text-sm hover:bg-academy-violet/60"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="mx-auto max-w-6xl p-4">
        <Outlet />
      </main>
    </div>
  );
}
