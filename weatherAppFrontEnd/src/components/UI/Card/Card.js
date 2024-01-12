const Card = ({ children, className }) => {
  return <div className={`rounded-3xl shadow-xl ${className}`}>{children}</div>;
};

export default Card;
