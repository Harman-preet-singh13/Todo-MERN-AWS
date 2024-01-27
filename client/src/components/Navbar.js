import React from "react";
import { useAuthentication } from "../customHook/Auth";



export default function Navbar() {
  const { logout } = useAuthentication();

  return (
    <div className="bg-slate-900 text-white">
      <div className="max-w-[1440px] mx-auto p-2 flex justify-between">
        <header>
          <h3 className="text-2xl">Todo</h3>
        </header>
        <button
          className="px-2 py-1 bg-slate-200 text-black font-semibold rounded border hover:border-white hover:bg-slate-900 hover:text-white"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
