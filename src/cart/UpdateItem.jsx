import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItem({ foodId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(foodId))}
      >
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(foodId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItem;
