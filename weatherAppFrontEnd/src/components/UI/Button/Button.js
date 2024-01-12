const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl shadow-xl cursor-pointer text-lg border text-white bg-violet-800 transition hover:bg-lime-950 h-12 w-24 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
