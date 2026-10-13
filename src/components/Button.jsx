
function Button({ label, onClick, variant = "primary", children }) {
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-semibold transition ${styles[variant]}`}
    >
      {label}
      {children}
    </button>
  );
}

export default Button;
