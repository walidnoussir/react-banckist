import { useSelector } from "react-redux";

function Footer() {
  const { mouvements, symbole } = useSelector(
    (state) => state.account.curAccount
  );

  const inMoney = mouvements
    .filter((mov) => mov > 0)
    .reduce((mov, acc) => mov + acc);
  const outMoney = mouvements
    .filter((mov) => mov < 0)
    .reduce((mov, acc) => mov + acc);

  return (
    <footer className="w-[80%] py-3 grid md:grid-cols-3 grid-cols-2 gap-x-2 gap-y-3 dark:text-slate-100">
      <div className="flex gap-4 items-center justify-start md:justify-normal">
        <p>IN</p>
        <span className="text-green-500 font-semibold md:text-base text-sm">
          {inMoney}
          {symbole}
        </span>
      </div>

      <div className="flex gap-4 items-center justify-end  md:justify-center">
        <p>OUT</p>
        <span className="text-red-500 font-semibold md:text-base text-sm">
          {Math.abs(outMoney)}
          {symbole}
        </span>
      </div>

      <p className="md:text-base md:col-span-1 text-sm col-span-full text-center md:text-right">
        Enjoy to your account 😊
      </p>
    </footer>
  );
}

export default Footer;
