import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getCurrentQuantityById } from "./cartSlice";

import UpdateItem from "./UpdateItem";

function CartItem({ item }) {
  const { foodId, name, quantity, totalPrice, image_url } = item;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(foodId));

  return (
    <li className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-12 bg-stone-50 rounded-xl p-4 border border-stone-400 w-full max-w-lg">
      <div className="flex items-center gap-6 sm:gap-8">
        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden">
          <img
            src={image_url}
            className="w-full h-full object-cover rounded-md"
            alt={name}
          />
        </div>
        <p className="text-center sm:text-left">
          {quantity} &times; {name}
        </p>
      </div>
      <p className="text-gray-700 font-semibold mt-2 sm:mt-0">${totalPrice}</p>
      <div className="flex items-center justify-center gap-4 sm:justify-between p-2 w-full sm:w-auto">
        <UpdateItem foodId={foodId} currentQuantity={currentQuantity} />
        <i
          className="fa-solid fa-trash text-pink-600 cursor-pointer hover:text-pink-800"
          onClick={() => dispatch(deleteItem(foodId))}
        ></i>
      </div>
    </li>
  );
}
export default CartItem;
