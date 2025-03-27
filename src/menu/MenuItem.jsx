import { useDispatch, useSelector } from "react-redux";
import UpdateItem from "../cart/UpdateItem.jsx";
import Button from "../ui/Button.jsx";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice.js";
import DeleteItem from "../cart/DeleteItem.jsx";

function MenuItem({ food }) {
  const dispatch = useDispatch();
  const { id, image_url, name, description, price } = food;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddtoCart() {
    const newItem = {
      foodId: id,
      name,
      quantity: 1,
      price,
      totalPrice: price * 1,
      image_url,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="w-62 flex flex-col items-center justify-center p-2">
      <div className="w-full  relative">
        <div className=" flex items-center justify-center p-2">
          <img
            src={image_url}
            alt={name}
            className="rounded-md mx-auto h-auto shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400"
          />
        </div>
      </div>
      <div className="border-dashed border-b-2 pb-2 mt-4">
        <p className="text-xl font-large font-lora-itallic">{name}</p>
        <p className="text-sm font-hind-madurai">{description}</p>
      </div>

      <div className="w-full h-9 mt-2 flex justify-between">
        <p>${price}</p>
        {isInCart && (
          <UpdateItem currentQuantity={currentQuantity} foodId={id} />
        )}
      </div>
      <div className="w-full gap-2 mt-4 flex justify-between">
        {!isInCart && (
          <Button type="small" onClick={handleAddtoCart}>
            Add to cart
          </Button>
        )}
        {isInCart && <DeleteItem foodId={id} />}
      </div>
    </li>
  );
}

export default MenuItem;
