function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
      className="opacity-35 outline-none rounded-full py-2 px-4 placeholder:text-gray-800 focus:opacity-45 text-slate-900 font-bold placeholder:font-normal md:w-full col-span-3"
    />
  );
}

export default Input;
