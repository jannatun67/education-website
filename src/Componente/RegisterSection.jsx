import React from "react";
import registerImage from "../assets/Banner/Image (1).png";
import { GoChevronDown } from "react-icons/go";

const RegisterSection = () => {
  return (
    <div className="my-30">
      <div className="flex flex-col md:flex-row h-screen ">
        {/* Left - Form Section */}
        <div className="bg-[#6C2EFF] text-white  flex-col items-end flex w-full md:w-1/2 p-10">
          <div className="w-full max-w-[526px] ">
            <div className="mb-4">
              <span className="bg-purple-100 text-[#6C2EFF] px-4 py-1 rounded-full text-sm font-medium">
                Registration
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Register Your Free Account
            </h2>
           <form className="space-y-4  p-6 rounded">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Name*"
          className="w-1/2 p-3 rounded border border-[#FBFBFB] text-white placeholder-white focus:outline-none bg-transparent"
        />
        <input
          type="email"
          placeholder="Email*"
          className="w-1/2 p-3 rounded border border-[#FBFBFB] text-white placeholder-white focus:outline-none bg-transparent"
        />
      </div>

      <div className="flex gap-4">
        <input
          type="tel"
          placeholder="Phone*"
          className="w-1/2 p-3 rounded border border-[#FBFBFB] text-white placeholder-white focus:outline-none bg-transparent"
        />

        <div className="relative w-1/2">
          <select
            required
            defaultValue=""
            className="w-full p-3 pr-10 rounded border border-[#FBFBFB] text-white  appearance-none focus:outline-none"
          >
            <option value="" disabled className="text-white">
              Address*
            </option>
            <option className="text-black">USA</option>
            <option className="text-black">UK</option>
            <option className="text-black">Canada</option>
          </select>

          {/* Custom dropdown icon */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none">
            <GoChevronDown />
          </div>
        </div>
      </div>

      <textarea
        placeholder="Message*"
        className="w-full p-3 rounded border border-[#FBFBFB] text-white placeholder-white focus:outline-none bg-transparent"
        rows="3"
      />

      <button
        type="submit"
        className="bg-white text-black font-semibold py-2 px-6 rounded hover:bg-gray-100 transition"
      >
        Sign Up Now
      </button>
    </form>
          </div>
        </div>

        {/* Right - Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={registerImage} // Replace with your image path
            alt="Reception"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
