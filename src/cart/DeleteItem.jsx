import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ foodId }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(deleteItem(foodId))}>
      delete
    </Button>
  );
}

export default DeleteItem;
