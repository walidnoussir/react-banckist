import { Link } from "react-router-dom";
import RequestMoney from "../components/RequestMoney";
import TransferMoneyForm from "../components/TransferMoneyForm";
import { FaLongArrowAltLeft } from "react-icons/fa";

function Transactions() {
  return (
    <div className="py-12 px-4 flex flex-col gap-14 md:grid md:grid-cols-2 md:gap-x-2">
      <div className="text-blue-500 flex gap-2 items-center col-span-full text-lg font-semibold hover:text-blue-600 duration-75 w-full justify-staet px-4 md:text-xl md:w-[80%] dark:text-blue-400 dark:hover:text-blue-500">
        <FaLongArrowAltLeft />
        <Link to="/home">Back To Home</Link>
      </div>

      <TransferMoneyForm />

      <RequestMoney />
    </div>
  );
}

export default Transactions;
