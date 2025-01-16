function LoginInput({ type, value, onChange }) {
  return (
    <input
      type={type}
      className="border border-sky-900 rounded-md py-1 px-4 outline-none focus:ring-1 focus:ring-sky-600"
      value={value}
      onChange={onChange}
    />
  );
}

export default LoginInput;
