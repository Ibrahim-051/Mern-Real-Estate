import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
function Header() {
  return (
    <header>
      <div className="flex justify-between items-center bg-slate-300 p-4">
        <Link to={"/"} className="flex items-center gap-2">
          <div>
            <span>Ibi's</span>
            <span>State</span>
          </div>
        </Link>
        <div>
          <form className="flex items-center border border-gray-400  rounded p-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent px-2 py-1 w-40 sm:w-56 border-none outline-none"
            />
            <FaSearch />
          </form>
        </div>
        <div>
          <ul className="flex gap-4">
            <Link to={"/"}>
              <li className="hidden sm:inline hover:underline ">Home</li>
            </Link>
            <Link to={"/about"}>
              <li className="hidden sm:inline hover:underline">About</li>
            </Link>
            <Link to={"/contact"}>
              <li className="hidden sm:inline hover:underline">Contact Us</li>
            </Link>
            <Link to={"/profile"}>
              <li className="hover:underline">Profile</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
