import { Link } from "react-router-dom";

function Button({ children, to, type, onClick }) {
  const base =
    "text-sm uppercase font-semibold tracking-wide text-stone-100 inline-block transition-all duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed w-full cursor-pointer";

  const styles = {
    primary:
      base +
      " py-2 px-3 sm:px-4 md:px-6 lg:px-8 sm:py-3 md:py-4 bg-violet-500 rounded-full focus:ring-violet-300 hover:bg-violet-400",
    small:
      base +
      " px-2 sm:px-3 md:px-5 py-1.5 sm:py-2.5 md:py-2.5 text-xs bg-violet-500 hover:bg-violet-300",
    round:
      "border rounded-full px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 text-sm cursor-pointer hover:border-violet-500",
    secondary:
      base +
      " border px-2 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-2.5 text-xs hover:border-violet-400",
    roundfull:
      "bg-violet-600 rounded-full px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 text-sm mt-2 cursor-pointer hover:bg-violet-400",
    custom:
      "rounded-full px-3 sm:px-3.5 md:px-4 py-2 sm:py-2.5 bg-pink-500 text-stone-100 mt-5 cursor-pointer hover:bg-pink-400",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
