function Row({ type, children }) {
  const base = "flex";

  const styles = {
    horizontal: base + " gap-8 items-center",
    vertical: base + " flex-col gap-2",
    between: base + " justify-between",
  };

  return <div className={styles[type]}>{children}</div>;
}

export default Row;
