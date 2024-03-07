import { useContext, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/Authprovider";

export const NavBar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();
  const { user, handleSignOut } = useContext(AuthContext);

  const handleSignOuts = () => {
    return handleSignOut();
  };

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  return (
    <span>
      <nav className="flex items-center  justify-between bg-[#393E46] px-4 py-2 text-white">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-md font-semibold text-white transition-all duration-200 hover:scale-110">
          <h2>Ru Pay</h2>
        </div>
        <ul className="hidden items-center justify-between gap-10 md:flex">
          <Link to="/">
            <li className="group flex text-sm font-semibold cursor-pointer flex-col">
              Home
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
          {user && user?.email ? (
            <Link onClick={handleSignOuts}>
              <li className="group flex  text-sm font-semibold  cursor-pointer flex-col">
                Logout
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </Link>
          ) : (
            <Link to="/login">
              <li className="group flex  text-sm font-semibold cursor-pointer flex-col">
                Login
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </Link>
          )}
          {!user && (
            <Link to="/registration">
              <li className="group flex  text-sm font-semibold cursor-pointer flex-col">
                Registration
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </Link>
          )}
          <Link to="/dashboard">
            <li className="group flex  cursor-pointer flex-col">
              <BiUser></BiUser>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </Link>
        </ul>
        <div
          ref={dropDownMenuRef}
          onClick={() => setDropDownState(!dropDownState)}
          className="relative flex transition-transform md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            {" "}
            <line x1="4" x2="20" y1="12" y2="12" />{" "}
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />{" "}
          </svg>
          {dropDownState && (
            <ul className=" z-10 gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
              <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                Home
              </li>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                Login
              </li>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                <BiUser></BiUser>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </span>
  );
};
