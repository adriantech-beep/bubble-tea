import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="flex items-center justify-center mt-12 flex-col">
      <Link to="/menu">&larr; Back to menu</Link>
      <p className="font-semibold mt-7">
        Your cart is still empty. Start adding some milktea 🧋:)
      </p>
    </div>
  );
}

export default EmptyCart;
