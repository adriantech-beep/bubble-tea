function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-6 px-4 py-6 sm:flex-row sm:gap-10 md:gap-16 bg-pink-200/60 border-t border-gray-300">
      <h1 className="font-hind-madurai text-sm sm:text-base md:text-lg text-gray-600">
        © 2025 Bubble Tea. All rights reserved.
      </h1>
      <ul className="flex gap-6 sm:gap-8 md:gap-10">
        <li>
          <i className="fa-brands fa-facebook text-blue-500 text-2xl sm:text-3xl"></i>
        </li>
        <li>
          <i className="fa-brands fa-twitter text-blue-700 text-2xl sm:text-3xl"></i>
        </li>
        <li>
          <i className="fa-brands fa-instagram text-orange-500 text-2xl sm:text-3xl"></i>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
