import { FiArrowRightCircle } from "react-icons/fi";
import Input from "../ui/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withdrawal } from "../redux/accountSlice";
import toast from "react-hot-toast";

function TransferMoneyForm() {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  const { curAccount } = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const balance = curAccount.mouvements.reduce((mov, acc) => mov + acc);

  function handleSubmit(e) {
    e.preventDefault();

    // Error: This field is required.
    if (!to || !amount) toast.error("Something's wrong. Please Try again.");
    // Error : Your Balance is not enough to transfer money.
    if (amount > balance)
      return toast.error("Your Balance is not enough to transfer money.");

    if (
      to ===
      curAccount.user
        .toLowerCase()
        .split(" ")
        .map((name) => name[0])
        .join("")
    )
      return toast.error("Something's wrong. Please Try again.");

    const info = {
      user: to,
      amount: Number(amount),
    };

    dispatch(withdrawal(info));
    toast.success(`${amount}${curAccount.symbole} successfully transferred`);

    setTo("");
    setAmount("");
  }

  return (
    <form
      className="bg-gradient-to-r from-cyan-500 to-blue-500 py-4 px-5 grid rounded-lg grid-cols-7 items-center gap-x-3 gap-y-2"
      onSubmit={handleSubmit}
    >
      <h1 className="text-slate-50 text-lg font-medium col-span-full">
        Transfer money
      </h1>
      <Input
        type="text"
        value={to}
        placeholder="Transfer To"
        onChange={(e) => setTo(e.target.value)}
      />

      <Input
        type="number"
        value={amount}
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      />

      <button className="text-3xl text-slate-50 cursor-pointer">
        <FiArrowRightCircle />
      </button>
    </form>
  );
}

export default TransferMoneyForm;
