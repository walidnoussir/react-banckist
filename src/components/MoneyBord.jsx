import { useSelector } from "react-redux";
import Movement from "./Movement";

function MoneyBord() {
  const { mouvements, movementsDates, symbole } = useSelector(
    (state) => state.account.curAccount
  );

  return (
    <div className="h-full md:w-[80%] w-full overflow-scroll bg-gray-50 rounded-md dark:bg-slate-700">
      {mouvements.map((mov, index) => (
        <Movement
          mov={mov}
          movementsDates={movementsDates}
          symbole={symbole}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
}

export default MoneyBord;
