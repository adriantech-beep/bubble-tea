import { createHashRouter, RouterProvider } from "react-router-dom";
import CreateOrder, { action as createOrderAction } from "./order/CreateOrder";
import Order, { loader as orderLoader } from "./order/Order";
import Menu, { loader as menuLoader } from "./menu/Menu";
import { ScrollProvider } from "./contexts/ScrollProvider";
import { TestimonialsProvider } from "./contexts/TestimonialsProvider";
import { action as updateOrderAction } from "./order/UpdateOrder";

import "./index.css";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Cart from "./cart/Cart";

const router = createHashRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return (
    <TestimonialsProvider>
      <ScrollProvider>
        <RouterProvider router={router} />
      </ScrollProvider>
    </TestimonialsProvider>
  );
}

export default App;
