function SuccessModal({ onHandleClose }) {
  return (
    <div className="w-full max-w-md p-4 sm:p-6 md:p-8 fixed top-[50%] left-1/2 rounded-lg text-center transform -translate-x-1/2 -translate-y-1/2 bg-stone-100 shadow-2xl">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
        Thank you for your registration
      </h1>
      <p className="mt-3 text-sm sm:text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        necessitatibus itaque. Mollitia tenetur praesentium pariatur!
      </p>
      <i
        onClick={onHandleClose}
        className="fa-solid fa-circle-xmark text-2xl text-pink-500 absolute top-[-5px] right-[-5px] cursor-pointer"
      ></i>
    </div>
  );
}

export default SuccessModal;
