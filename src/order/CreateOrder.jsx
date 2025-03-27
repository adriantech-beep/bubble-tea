import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../utils/helpers";
import { createOrder } from "../services/apiRestaurant";
import store from "../store";
import { fetchAddress } from "../user/userSlice";
import Button from "../ui/Button";
import EmptyCart from "../cart/EmptyCart";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";
  const [withPriority, setWithPriority] = useState(false);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  let priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  console.log(totalPrice);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6 w-full max-w-screen-md mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-center">
        Ready to order? Let's go!
      </h2>

      <Form method="POST">
        {/* First Name */}
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40 font-medium">First Name</label>
          <input
            className="input w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-400"
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40 font-medium">Phone number</label>
          <div className="grow">
            <input
              className="input w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-400"
              type="tel"
              name="phone"
              required
            />
            {formErrors?.phone && (
              <p className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="relative mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40 font-medium">Address</label>
          <div className="grow relative">
            <input
              className="input w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-"
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />
            {addressStatus === "error" && (
              <p className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md">
                {errorAddress}
              </p>
            )}
          </div>
          {!position.latitude && !position.longitude && (
            <span>
              <Button
                type="primary"
                disabled={isLoadingAddress}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get position
              </Button>
            </span>
          )}
        </div>

        {/* Priority Option */}
        <div className="mb-12 flex gap-5 items-center">
          <input
            className="h-6 w-6 accent-yellow-400 focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to give your order priority?
          </label>
        </div>

        {/* Place Order Button */}
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button
            disabled={isSubmitting || isLoadingAddress}
            type="primary"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
          >
            {isSubmitting || isLoadingAddress
              ? " Placing order.."
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const cart = JSON.parse(data.cart);

  const totalCartPrice = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const priorityPrice = data.priority === "true" ? totalCartPrice * 0.2 : 0;
  const orderPrice = totalCartPrice;

  const order = {
    ...data,
    cart: cart,
    priority: data.priority === "true",
    orderPrice: orderPrice,
    priorityPrice: priorityPrice,
    status: "preparing",
    estimatedDelivery: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = " Please give us your correct number";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  // DO NOT OVERUSE
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
