import Strawberry from "../assets/section-images/strawberry.png";
import Matcha from "../assets/section-images/matcha.png";
import Chocolate from "../assets/section-images/chocolate.png";
import { useScroll } from "../contexts/ScrollProvider";

function ProductSection() {
  const { productSectionRef } = useScroll();

  return (
    <section
      ref={productSectionRef}
      className="h-full  flex flex-col items-center justify-center mt-8 px-4 sm:px-6 md:px-8 lg:px-16"
    >
      <div className="flex flex-col items-center justify-center mb-6">
        <h1 className="font-kaushan-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 text-center">
          Our Products
        </h1>
        <p className="text-center font-hind-madurai text-sm sm:text-base md:text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque numquam
          blanditiis odio mollitia odit ab veritatis provident, suscipit magnam
          ex?
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full max-w-screen-lg pb-4">
        <div className="flex flex-col items-center p-4 border border-gray-300 bg-stone-200/10 rounded-lg transition-transform hover:scale-105">
          <div className="w-full">
            <img
              src={Strawberry}
              className="h-auto max-w-full rounded-md"
              alt="Strawberry MilkTea"
            />
          </div>
          <h3 className="font-lora-itallic text-base sm:text-lg md:text-xl mt-3 text-center">
            Strawberry MilkTea
          </h3>
          <p className="w-full leading-4 text-center font-hind-madurai text-xs sm:text-sm md:text-base mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            possimus maiores fugiat tempora fuga voluptatum.
          </p>
        </div>

        <div className="flex flex-col items-center p-4 border border-gray-300 bg-stone-200/10 rounded-lg transition-transform hover:scale-105">
          <div className="w-full">
            <img
              src={Matcha}
              className="h-auto max-w-full rounded-md"
              alt="Matcha MilkTea"
            />
          </div>
          <h3 className="font-lora-itallic text-base sm:text-lg md:text-xl mt-3 text-center">
            Matcha MilkTea
          </h3>
          <p className="w-full leading-4 text-center font-hind-madurai text-xs sm:text-sm md:text-base mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aut
            voluptates, dolorum blanditiis nisi modi?
          </p>
        </div>

        <div className="flex flex-col items-center p-4 border border-gray-300 bg-stone-200/10 rounded-lg transition-transform hover:scale-105">
          <div className="w-full">
            <img
              src={Chocolate}
              className="h-auto max-w-full rounded-md"
              alt="Chocolate MilkTea"
            />
          </div>
          <h3 className="font-lora-itallic text-base sm:text-lg md:text-xl mt-3 text-center">
            Chocolate MilkTea
          </h3>
          <p className="w-full leading-4 text-center font-hind-madurai text-xs sm:text-sm md:text-base mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            possimus animi, explicabo mollitia nisi ipsum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
