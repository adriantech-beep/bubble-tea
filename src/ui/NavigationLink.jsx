import { Link } from "react-router-dom";

function NavigationLink({ children, onClick }) {
  const classname =
    "font-hind-madurai text-stone-100 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ";
  return (
    <Link onClick={onClick} className={classname}>
      {children}
    </Link>
  );
}

export default NavigationLink;
