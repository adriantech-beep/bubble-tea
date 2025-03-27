import { useFetcher } from "react-router-dom";
import { updateOrder } from "../services/apiRestaurant";
import Button from "../ui/Button";

function UpdateOrder() {
  const fetcher = useFetcher();
  console.log(fetcher);

  return (
    <fetcher.Form method="Patch" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
