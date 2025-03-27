import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex gap-12">
      <div className="relative">
        <p className="absolute left-5 bottom-2 font-monsterrat-regular text-pink-50">
          {totalCartQuantity}
        </p>
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping text-stone-100"></i>
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
