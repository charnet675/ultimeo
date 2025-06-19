
import { useState } from "react";
import UltimeoLayout from "./UltimeoLayout";
import DashboardUser from "./DashboardUser";
import WalletsPage from "./WalletsPage";

export default function UltimeoPreview() {
  const [tab, setTab] = useState("dashboard");
  const user = { name: "Alex", avatar: undefined, isAdmin: false };
  const onLogout = () => {};

  return (
    <UltimeoLayout user={user} isAdmin={user.isAdmin} onLogout={onLogout}>
      <div className="flex gap-6 mb-10">
        <button
          onClick={() => setTab("dashboard")}
          className={`px-6 py-2 rounded-full font-bold shadow transition-all duration-150 ${tab === "dashboard" ? "bg-fuchsia-500 text-white" : "bg-white text-fuchsia-500 border border-fuchsia-500"}`}
        >
          Tableau de bord
        </button>
        <button
          onClick={() => setTab("wallets")}
          className={`px-6 py-2 rounded-full font-bold shadow transition-all duration-150 ${tab === "wallets" ? "bg-fuchsia-500 text-white" : "bg-white text-fuchsia-500 border border-fuchsia-500"}`}
        >
          Portefeuilles
        </button>
      </div>
      {tab === "dashboard" ? <DashboardUser /> : <WalletsPage />}
    </UltimeoLayout>
  );
}
