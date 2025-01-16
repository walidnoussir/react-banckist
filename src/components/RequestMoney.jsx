import { FiArrowRightCircle } from "react-icons/fi";
import Input from "../ui/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "../redux/accountSlice";
import toast from "react-hot-toast";

function RequestMoney() {
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");

  const dispatch = useDispatch();
  const { curAccount } = useSelector((state) => state.account);

  function handleRequestMoney(e) {
    e.preventDefault();

    if (curAccount.pin === Number(pin)) {
      dispatch(deposit(amount));
      toast.success(
        `${amount}${curAccount.symbole} Successfully added in your balance.`
      );
    } else {
      toast.error("The password is not correct.");
    }

    setPin("");
    setAmount("");
  }

  return (
    <form className="py-4 px-5 bg-gradient-to-r from-yellow-500 to-amber-500 grid grid-cols-7 items-center gap-x-3 gap-y-2 rounded-lg">
      <h1 className="text-slate-50 text-lg font-medium col-span-full">
        Request money
      </h1>
      <Input
        type="number"
        value={amount}
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <Input
        type="password"
        value={pin}
        placeholder="Password"
        onChange={(e) => setPin(e.target.value)}
      />

      <button
        className="text-3xl text-slate-50 cursor-pointer"
        onClick={handleRequestMoney}
      >
        <FiArrowRightCircle />
      </button>
    </form>
  );
}

export default RequestMoney;
