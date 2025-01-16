function Button({ children, type, onClick }) {
  const base = "py-1 px-4";

  const styles = {
    primary:
      base + " bg-sky-700 text-slate-50 text-lg hover:bg-sky-800 rounded-lg",
  };

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
