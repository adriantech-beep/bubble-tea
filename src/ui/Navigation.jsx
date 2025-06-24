import { Link } from "react-router-dom";
import { useState } from "react";
import { useScroll } from "../contexts/ScrollProvider";

import Username from "../user/Username";
import NavigationLink from "./NavigationLink";
import Logo from "../assets/logo.jpg";
function Navigation() {
  const {
    scrollToProductDetails,
    scrollToProductSection,
    scrollToProductReviews,
  } = useScroll();

  const [mobileNav, setMobileNav] = useState(null);

  function handleShowMobileNav() {
    setMobileNav(true);
  }
  function handleCloseMobileNav() {
    setMobileNav(null);
  }

  return (
    <nav className="flex items-center justify-between p-4 sm:p-6 bg-violet-500/80">
      <Link
        to="/"
        className=" tracking-widest font-monsterrat-semibold text-pink-100"
      >
        <img
          src={Logo}
          className="w-12 sm:w-16 md:w-20 lg:w-18  rounded-full"
          alt="Logo"
        />
      </Link>
      <div className=" hidden sm:flex w-full max-w-screen-xl flex flex-wrap items-center justify-between">
        <ul className="p-6 flex gap-4 sm:gap-8 md:gap-12 flex-wrap justify-center">
          <NavigationLink onClick={scrollToProductSection}>
            Products
          </NavigationLink>
          <NavigationLink onClick={scrollToProductDetails}>
            How It's Made
          </NavigationLink>
          <NavigationLink onClick={scrollToProductReviews}>
            Our Reviews
          </NavigationLink>
        </ul>

        <div className="mt-4 sm:mt-0 flex-shrink-0">
          <Username />
        </div>
      </div>

      <div className="block sm:hidden">
        <i
          onClick={handleShowMobileNav}
          className="fa-solid fa-bars text-2xl text-stone-100"
        ></i>
        {mobileNav && (
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-violet-400 shadow-lg transform transition-transform ${
              mobileNav ? "translate-x-0" : "translate-x-full"
            } z-50 flex flex-col items-center  gap-6 p-10`}
          >
            <i
              onClick={handleCloseMobileNav}
              className="fa-solid fa-circle-arrow-right text-stone-100 text-2xl"
            ></i>
            <NavigationLink onClick={scrollToProductSection}>
              Products
            </NavigationLink>
            <NavigationLink onClick={scrollToProductDetails}>
              How It's Made
            </NavigationLink>
            <NavigationLink onClick={scrollToProductReviews}>
              Our Reviews
            </NavigationLink>
            <Username />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
