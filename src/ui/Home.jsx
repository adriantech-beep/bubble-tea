import { useSelector } from "react-redux";
import Image from "../assets/bg.png";
import CreateUser from "../user/CreateUser";
import Button from "./Button";
import BgImage from "../assets/colorful-paint-white.jpg";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-full gap-2 sm:flex-row sm:justify-center md:items-center bg-center bg-cover"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="flex items-center flex-col gap-4">
        <h1 className="animate-fade-in-scale text-5xl text-center font-worksans-regular sm:text-4xl md:text-7xl font-semibold text-stone-700 ">
          Bubble Tea
        </h1>
        <p className="font-kaushan-script text-center text-4xl md:text-6xl sm:text-3xl text-stone-700">
          Created with Fun and Love
        </p>
        <div>
          {username === "" ? (
            <CreateUser />
          ) : (
            <Button type="primary" to="/menu">
              Continue ordering, {username}
            </Button>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <img
          src={Image}
          alt="A background image of three milktea"
          className="h-auto max-w-full"
        />
      </div>
    </div>
  );
}

export default Home;
