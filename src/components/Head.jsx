import { useSelector } from "react-redux";

function Head() {
  const { mouvements, symbole } = useSelector(
    (state) => state.account.curAccount
  );

  const balance = mouvements.reduce((mov, acc) => mov + acc);

  return (
    <div className="md:w-[75%] w-full py-3 flex justify-between items-center">
      <p className="text-lg text-slate-500 font-medium dark:text-slate-400">
        Welcome Back,
      </p>
      <h1 className="md:text-2xl text-lg font-bold text-slate-800 dark:text-slate-50">
        Balance : {balance}
        {symbole}
      </h1>
    </div>
  );
}

export default Head;
