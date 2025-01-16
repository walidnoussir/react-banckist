import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import { useState } from "react";

function AppLayout() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`${isDark && "dark"}`}>
      <div className="bg-slate-200 h-screen flex flex-col dark:bg-slate-800">
        <Header isDark={isDark} setIsDark={setIsDark} />

        <main className="h-full overflow-scroll pt-8 pb-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
