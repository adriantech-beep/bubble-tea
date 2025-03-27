import Milktea from "../assets/section-images/miltea.png";
import Original from "../assets/section-images/original.png";
import { useScroll } from "../contexts/ScrollProvider";
import Button from "./Button";

function ProductDetails() {
  const { productDetailsRef } = useScroll();
  return (
    <section
      ref={productDetailsRef}
      className="grid grid-cols-5 grid-rows-8 gap-4 p-12 bg-stone-200/20 mt-5"
    >
      <div className="col-span-2 row-span-4 p-4">
        <img src={Milktea} />
      </div>
      <div className="col-span-3 row-span-4 col-start-3 flex flex-col justify-center items-end text-right ">
        <h1 className="font-bold text-lg font-lora-itallic">
          Tradition and Love
        </h1>
        <h2 className="font-semibold text-4xl mb-4 font-kaushan-script">
          How It's Made
        </h2>
        <p className="font-hind-madurai">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsum
          nemo, omnis dicta incidunt facilis reprehenderit blanditiis error,
          aliquid maiores corporis praesentium ratione assumenda aspernatur!
          Rerum impedit deserunt sint doloremque quibusdam quae. Corporis,
          doloremque quos? Quam ullam ut dolorem, ipsa beatae autem doloribus
          excepturi, dignissimos cum aliquam dolore placeat impedit?
        </p>
        <Button type="custom">Read more</Button>
      </div>
      <div className="col-span-2 row-span-4 col-start-4 row-start-5 ">
        <img src={Original} />
      </div>
      <div className="col-span-3 row-span-4 row-start-5 flex flex-col justify-center items-start text-left ">
        <h1 className="font-bold text-lg font-lora-itallic">Why Choose</h1>
        <h2 className="font-semibold text-4xl mb-4 font-kaushan-script">
          Our MilkTea
        </h2>
        <p className="font-hind-madurai">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eveniet
          ipsa neque obcaecati dolor atque adipisci laborum et deleniti officiis
          accusamus quo quidem, ex, quos nobis illo dignissimos ab eaque odio
          sint vel? Ut itaque asperiores delectus quibusdam nemo accusamus nobis
          iste sunt consequatur blanditiis voluptas, culpa, optio ipsa mollitia!
        </p>
        <Button type="custom">Read more</Button>
      </div>
    </section>
  );
}

export default ProductDetails;
