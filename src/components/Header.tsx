import { React, useState,useEffect } from "react";
import profile from "../assets/profile.png";
import location from "../assets/location.png";
import { FaRegMoon, FaSun } from "react-icons/fa6";

const Header: React.FC = () => {
  const [isMoon, setIsMoon] = useState<boolean>(false);

  const toggleIcon = () => {
    setIsMoon((prev) => !prev);
    // Toggle dark mode on the body or root element
    if (isMoon) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsMoon(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <div className="m-4 text-2xl font-mono">StarCar+</div>
      <div className="m-5">
        <div className="hidden lg:bg-black rounded-3xl flex items-center h-10 gap-2 p-2 translate-x-1/2 cursor-pointer">
          <div className="hidden lg:text-black text-sm bg-gray-100 rounded-3xl p-2">Light mode</div>
          <div className="hidden lg:text-gray-100 text-sm p-3">Dark</div>
        </div>
      </div>
      <div className="m-5 flex gap-4 items-center">
        <button
          onClick={toggleIcon}
          className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {isMoon ? (
            <FaRegMoon className="text-gray-800 w-6 h-6" />
          ) : (
            <FaSun className="text-yellow-500 w-6 h-6" />
          )}
        </button>
        <div className="hidden lg:text-sm text-gray-400">
          <img className="w-5 inline mr-2" src={location} />
          New York , US
        </div>
        <div className="lg:text-sm">
          <img className="w-10 inline mr-2" src={profile} />
          <span className="hidden">Nancy Holloway</span>
        </div>
      </div>
    </>
  );
};

export default Header;
