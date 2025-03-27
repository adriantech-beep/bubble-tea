import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Navigation from "./Navigation";
import ProductSection from "./ProductSection";
import ProductDetails from "./ProductDetails";
import Testimonials from "./Testimonials";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="h-full flex flex-col relative">
      {isLoading && <Loader />}
      <Navigation />
      <main className="flex items-center justify-center">
        <Outlet />
      </main>

      <ProductSection />
      <ProductDetails />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default AppLayout;
