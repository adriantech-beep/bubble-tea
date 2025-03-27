import { useState } from "react";
import Button from "./Button";
import { Form } from "react-router-dom";
import { createEmail } from "../services/apiRestaurant";
import SuccessModal from "./SuccessModal";

function Newsletter() {
  const isValidEmail = (str) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(str);
  };

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    try {
      const newEmail = { email };
      await createEmail(newEmail);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Failed to subscribe. Please try again.", error);
    }
    setEmail("");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="w-full  p-6 flex flex-col items-center justify-center bg-pink-50 md:max-w-full lg:max-w-full "
    >
      <h1 className="font-lora-italic text-lg sm:text-xl md:text-2xl">
        Join our community
      </h1>
      <p className="font-kaushan-script text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
        Subscribe to our newsletter
      </p>
      <div className="w-full flex flex-col items-center">
        <input
          type="email"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-full border border-violet-400 px-4 py-2 text-sm sm:text-base font-monsterrat-regular transition-all duration-300 text-violet-800 bg-violet-100 focus:outline-none focus:ring focus:ring-violet-800 mt-5"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {email && (
          <Button type="custom" className="mt-4 sm:mt-5">
            Subscribe
          </Button>
        )}
      </div>
      {errorMessage && (
        <p className="text-red-500 mt-2 text-sm md:text-base">{errorMessage}</p>
      )}
      {showModal && <SuccessModal onHandleClose={handleCloseModal} />}
    </Form>
  );
}

export default Newsletter;
