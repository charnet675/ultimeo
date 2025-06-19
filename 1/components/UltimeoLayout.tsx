
import UltimeoSidebar from "./UltimeoSidebar";
import UltimeoHeader from "./UltimeoHeader";

export default function UltimeoLayout({ user, isAdmin, onLogout, children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <UltimeoSidebar user={user} isAdmin={isAdmin} />
      <div className="flex flex-col flex-1">
        <UltimeoHeader user={user} onLogout={onLogout} />
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
