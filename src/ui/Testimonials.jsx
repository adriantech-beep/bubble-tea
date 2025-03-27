import { useEffect, useCallback } from "react";
import styles from "./Testimonials.module.css";
import { useTestimonials } from "../contexts/TestimonialsProvider";
import { useScroll } from "../contexts/ScrollProvider";

/*Additional resources for this component is on the context api on Context folder of ProductsContext*/
function Testimonials() {
  const { testimonials, sliderRef, currSlide, dispatch, maxSlide } =
    useTestimonials();

  const { productReviewRef } = useScroll();

  const goToSlide = useCallback(
    (slide) => {
      if (sliderRef.current) {
        const slides = sliderRef.current.querySelectorAll(`.${styles.slide}`);
        slides.forEach(
          (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
      }
      dispatch({ type: "slide", payload: slide });
    },
    [sliderRef, dispatch]
  );
  const prevSlide = useCallback(() => {
    const newSlide = currSlide === 0 ? maxSlide - 1 : currSlide - 1;
    goToSlide(newSlide);
  }, [currSlide, maxSlide, goToSlide]);

  const nextSlide = useCallback(() => {
    const newSlide = currSlide === maxSlide - 1 ? 0 : currSlide + 1;
    goToSlide(newSlide);
  }, [currSlide, maxSlide, goToSlide]);

  useEffect(() => {
    goToSlide(currSlide);
  }, [currSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  return (
    <div
      ref={productReviewRef}
      className="flex flex-col items-center py-2 relative max-w-[100rem] h-[50rem]  overflow-hidden mt-5"
    >
      <div className="flex flex-col items-center w-full px-4 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <h1 className="font-lora-italic text-xl sm:text-2xl lg:text-3xl">
          What our
        </h1>
        <h2 className="font-kaushan-script text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Customers Say
        </h2>
        <p className="font-hind-madurai text-center mt-2 text-sm sm:text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          minima consequatur tempore nisi voluptates non eveniet est, quasi
          aliquid libero provident laudantium delectus officiis explicabo.
        </p>
      </div>
      <div
        className="w-full max-w-[800px] relative overflow-hidden h-full"
        ref={sliderRef}
      >
        {testimonials.map((testimonial, index) => (
          <div className={styles.slide} key={index}>
            <div className={styles.testimonial}>
              <div className="flex flex-col gap-2 items-center justify-center p-4">
                <img
                  src={testimonial.imgSrc || "/placeholder.svg"}
                  alt="A photo of a customer from around the globe"
                  className="w-32 rounded-full"
                />
                <p className="text-center">{testimonial.text}</p>
                <h2 className="font-kaushan-script font-bold">
                  -{testimonial.name}-
                </h2>
                <p>{testimonial.email}</p>
              </div>
            </div>
          </div>
        ))}
        <button
          className={`${styles.sliderBtn} ${styles.sliderBtnLeft}`}
          onClick={prevSlide}
        >
          <i className="fa-solid fa-arrow-left text-stone-100"></i>
        </button>
        <button
          className={`${styles.sliderBtn} ${styles.sliderBtnRight}`}
          onClick={nextSlide}
        >
          <i className="fa-solid fa-arrow-right text-stone-100 "></i>
        </button>
        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`${styles.dotsDot} ${
                index === currSlide ? styles.dotsDotActive : ""
              }`}
              onClick={() => dispatchEvent({ type: "slide", payload: index })}
            >
              <p className={styles.text}>scroll</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
