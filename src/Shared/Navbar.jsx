import React from "react";
import logo from "../assets/logo/Icon.png";
import grid from "../assets/logo/Frame 15.png";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="bg-base-100">
      <div className="navbar md:w-[1280px] mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <details>
                  <summary className="font-medium">Courses</summary>
                  <ul className="p-2"></ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="font-medium">Blog</summary>
                  <ul className="p-2"></ul>
                </details>
              </li>

              <li>
                <details>
                  <summary className="font-medium">Pages</summary>
                  <ul className="p-2"></ul>
                </details>
              </li>
              <li>
                <a className="font-medium">Contact</a>
              </li>
              <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" />
            <div>
            <FiShoppingCart />
            </div>
          </label>
          <div className="navbar-end mt-2">
          <a className="btn btn-primary">Try for free </a>
        </div>
            </ul>
          </div>
          <a className="text-xl flex items-center gap-1">
            <img src={logo} alt="" />
            <span className="font-medium">EduHive</span>
          </a>
          <div className="md:border-l-1 border-gray-400 h-8  md:ml-10"></div>
          <div className=" ml-16 flex items-center gap-1">
            <img src={grid} alt="" />
            <span className="font-medium">Category</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="font-medium">Courses</summary>
                <ul className="p-2"></ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="font-medium">Blog</summary>
                <ul className="p-2"></ul>
              </details>
            </li>

            <li>
              <details>
                <summary className="font-medium">Pages</summary>
                <ul className="p-2"></ul>
              </details>
            </li>
            <li>
              <a className="font-medium">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex gap-3">
         <div className="hidden md:inline-block">
           <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" />
            <div>
            <FiShoppingCart />
            </div>
          </label>
         </div>
          <div className="navbar-end hidden md:inline-block">
          <a className="btn btn-primary">Try for free </a>
        </div>
        </div>
      
      </div>
    </div>
  );
};

export default Navbar;
