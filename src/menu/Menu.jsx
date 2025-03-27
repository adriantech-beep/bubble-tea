import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { getMenu } from "../services/apiRestaurant";
import Navigation from "../ui/Navigation";

function Menu() {
  const menu = useLoaderData();

  return (
    <div className="flex flex-col">
      <ul className="flex flex-wrap items-center justify-center gap-6 p-8 mt-2 ">
        {menu.map((food) => (
          <MenuItem key={food.id} food={food} />
        ))}
      </ul>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
