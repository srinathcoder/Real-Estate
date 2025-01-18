import { BiSearchAlt2 } from "react-icons/bi";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-300 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-blue-500">React</span>
            <span className="text-blue-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-blue-200 p-2 rounded-lg flex items-center ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <BiSearchAlt2 className="font-bold text-blue-700" />
        </form>
        <ul className="flex gap-4 text-blue-800">
          <Link to="/">
            <li className="hidden sm:inline hover:underline">Home</li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline hover:underline">About</li>
          </Link>
          <Link to="/sign-in">
            <li className="hover:underline">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
