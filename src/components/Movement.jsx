function Movement({ mov, movementsDates, symbole, index }) {
  const deposit =
    "bg-green-500 py-1 rounded-full text-slate-50 font-medium w-[6rem] md:text-sm text-xs text-center";
  const withdrawal =
    "bg-red-500 py-1 rounded-full text-slate-50 font-medium w-[6rem] md:text-sm text-xs text-center";

  return (
    <ul>
      <li className="md:grid md:grid-cols-4 items-center p-2 border-b border-slate-300 hover:bg-slate-100 duration-100 cursor-pointer flex justify-between dark:hover:bg-slate-600 dark:border-slate-500">
        <p className={mov > 0 ? deposit : withdrawal}>
          {mov > 0 ? "Deposit" : "Withdrawal"}
        </p>
        <span className="text-slate-950 dark:text-slate-100">
          {movementsDates[index]}
        </span>
        <h1 className="col-span-2 flex justify-end md:text-2xl text-slate-700 font-semibold text-lg dark:text-slate-50">
          {Math.abs(mov)}
          {symbole}
        </h1>
      </li>
    </ul>
  );
}

export default Movement;
