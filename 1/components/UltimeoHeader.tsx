
export default function UltimeoHeader({ user, onLogout }) {
  return (
    <header className="flex justify-between items-center bg-white shadow px-6 py-4">
      <h1 className="text-xl font-semibold">Bienvenue, {user.name}</h1>
      <button onClick={onLogout} className="text-red-500">Déconnexion</button>
    </header>
  );
}
