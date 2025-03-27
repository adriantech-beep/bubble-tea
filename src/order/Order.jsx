import { useEffect } from "react";
import { useFetcher, useLoaderData } from "react-router-dom";
import { calcMinutesLeft, formatCurrency, formatDate } from "../utils/helpers";
import { getOrder } from "../services/apiRestaurant";
import UpdateOrder from "./UpdateOrder";
import OrderItem from "./OrderItem";

function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher]
  );

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="py-6 px-4 space-y-8 ">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2 className="text-xl font-semibold">Order# {id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="bg-red-500 rounded-full py-1 px-3 text-sm uppercase font-semi-bold text-red-50 tracking-wide">
              Priority
            </span>
          )}
          <span className="bg-green-500 rounded-full py-1 px-3 text-sm uppercase font-semi-bold text-green-50 tracking-wide">
            {status} order
          </span>
        </div>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem
            item={item}
            isLoadingIngredients={fetcher.state === "loading"}
            key={item.foodId}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.foodId)?.ingredients ??
              []
            }
          />
        ))}
      </ul>

      <div className="flex items-center justify-between flex-wrap gap-2 bg-stone-200 py-5 px-2">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div className="spce-y-2 bg-stone-200 py-5 px-6">
        <p className="font-medium text-sm text-stone-600">
          Price milktea: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-stone-600">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
