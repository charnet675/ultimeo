
export default function UltimeoSidebar({ user, isAdmin }) {
  return (
    <aside className="w-64 bg-gradient-to-b from-green-400 to-purple-600 text-white p-6">
      <div className="font-bold text-xl mb-4">Ultimeo</div>
      <ul>
        <li className="mb-2">Accueil</li>
        <li className="mb-2">Portefeuilles</li>
        {isAdmin && <li className="mb-2">Admin Panel</li>}
      </ul>
    </aside>
  );
}
