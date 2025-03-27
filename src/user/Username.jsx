import { useSelector } from "react-redux";
import CartOverview from "../cart/CartOverview";

function Username() {
  const username = useSelector((state) => state.user.username);
  if (!username) return null;
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-12 ">
      <CartOverview />
      <h1 className="font-lora-italic text-pink-100">Hello, {username}</h1>
    </div>
  );
}

export default Username;
