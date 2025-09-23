function Button({ children, onClick, variant = "default", className = "" }) {
  const baseStyles = "text-white px-4 py-2 rounded transition";
  const variantStyles =
    variant === "logout"
      ? "bg-red-500 hover:bg-red-600"
      : "bg-green-700 hover:bg-green-800";

  return (
    <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
