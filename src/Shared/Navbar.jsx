import React from "react";
import logo from "../assets/logo/Icon.png";
import grid from "../assets/logo/Frame 15.png";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="bg-base-100">
      <div class=" md:w-[1280px] h-[80-px] py-[15px]  mx-auto  ">
        <div className="gap-[121px] items-center flex">
          <div class="flex items-center">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
                <div></div>
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
                <div className=" flex items-center gap-3 h-[45px] ">
                  <img src={grid} alt="" />
                  <span className="font-medium">Category</span>
                </div>
                <div className="navbar-end mt-2">
                  <a className="btn btn-primary">Try for free </a>
                </div>
              </ul>
            </div>
            <div className="flex items-center w-[241px] gap-[20px]">
              <a className="text-xl h-[45px] py-[15px] flex items-center gap-1">
                <img src={logo} alt="" />
                <span className="font-medium">EduHive</span>
              </a>
              <div className="md:border-l-1 border-gray-400 h-8"></div>

              <div className="hidden md:inline-block ">
                <div className="flex  items-center gap-3 h-[45px] ">
                  <img src={grid} alt="" />
                  <span className="font-medium">Category</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" hidden lg:flex h-[45px] ">
            <ul className="menu menu-horizontal px-1 gap-10">
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
          <div class="py-[15px]">
            <div className="flex items-center gap-3 h-[45px] ">
              <div className="hidden md:inline-block">
                <label className="flex gap-[2px] items-center border border-gray-300 rounded-[6px] p-[16px] w-[240px]">
                  <input type="search" className="grow" placeholder="Search" />
                  <div>
                    <FiShoppingCart />
                  </div>
                </label>
              </div>
              <div className="navbar-end hidden md:inline-block">
                <a className="p-[16px] bg-[#5F2DED] rounded-[6px] text-white font-medium">
                  Try for free{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
