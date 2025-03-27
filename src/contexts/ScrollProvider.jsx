import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

function ScrollProvider({ children }) {
  const productDetailsRef = useRef(null);
  const productSectionRef = useRef(null);
  const productReviewRef = useRef(null);

  const scrollToProductDetails = () => {
    productDetailsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProductSection = () => {
    productSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProductReviews = () => {
    productReviewRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider
      value={{
        scrollToProductDetails,
        productDetailsRef,
        productSectionRef,
        scrollToProductSection,
        scrollToProductReviews,
        productReviewRef,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

function useScroll() {
  const context = useContext(ScrollContext);
  if (context === undefined)
    throw new Error("Context was used outside of the Context Provider");
  return context;
}

export { ScrollProvider, useScroll };
