import { FaReact } from "react-icons/fa";
import { MdLightMode, MdLogout, MdOutlineDarkMode } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Header({ isDark, setIsDark }) {
  const account = useSelector((state) => state.account.curAccount);

  const navigate = useNavigate();

  function handleChangeMode() {
    setIsDark((dark) => !dark);
  }

  console.log(account);
  return (
    <header className="bg-slate-50 py-4 px-6 flex items-center justify-between dark:bg-slate-900/40 dark:text-slate-50 dark:shadow-md dark:shadow-slate-950/40">
      <Link to="/home" className="flex gap-1 items-center">
        <FaReact className="logo" />

        <h1 className="md:text-base text-sm font-medium">Hello</h1>
        <span className="md:text-xl text-base font-semibold text-slate-900 dark:text-slate-50">
          {account.user},
        </span>
      </Link>

      <div className="flex gap-6">
        {isDark ? (
          <MdLightMode
            className="text-2xl cursor-pointer"
            onClick={handleChangeMode}
          />
        ) : (
          <MdOutlineDarkMode
            className="text-2xl cursor-pointer"
            onClick={handleChangeMode}
          />
        )}
        <MdLogout
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
    </header>
  );
}

export default Header;
