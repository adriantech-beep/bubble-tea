import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "./cartSlice";
import { Link } from "react-router-dom";

import EmptyCart from "./EmptyCart";
import Button from "../ui/Button";
import CartItem from "./CartItem";

function Cart() {
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="min-h-screen w-full flex items-center justify-center flex-col px-4 mt-6">
      {/* Back to Menu Link */}
      <Link
        to="/menu"
        className="mb-6 text-blue-500 text-sm sm:text-base hover:underline"
      >
        &larr; Back to Menu
      </Link>

      {/* Cart Items List */}
      <ul className="flex flex-col gap-4 sm:gap-6">
        {cart.map((item) => (
          <CartItem item={item} key={item.foodId} />
        ))}
      </ul>

      {/* Payment Summary Section */}
      <div className="mt-6 w-full max-w-md bg-gray-100 p-4 rounded-lg shadow-lg">
        <h1 className="text-lg sm:text-xl font-bold text-gray-700 mb-4 text-center">
          Payment Summary
        </h1>
        <div className="flex justify-between text-gray-600">
          <p>Total price</p>
          <p>${totalCartPrice}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex w-full max-w-md gap-4 mt-8">
        <Link
          to="/order/new"
          className="text-sm sm:text-base uppercase font-semibold bg-pink-400 text-stone-800 tracking-wide transition duration-300 focus:outline-none focus:ring focus:ring-pink-300 disabled:opacity-50 w-full rounded-full flex items-center justify-center text-center hover:bg-pink-500"
        >
          Place Order
        </Link>
        <Button
          type="primary"
          className="w-full"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
