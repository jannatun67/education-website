import React from 'react';
import  registerImage from "../assets/Banner/Image (1).png" 

const RegisterSection = () => {
    return (
       <div className='py-30'>
         <div className="flex flex-col md:flex-row h-screen ">
      {/* Left - Form Section */}
      <div className="bg-[#6C2EFF] text-white flex items-center justify-center w-full md:w-1/2 p-10">
        <div className="w-full max-w-md">
          <div className="mb-4">
            <span className="bg-purple-100 text-[#6C2EFF] px-4 py-1 rounded-full text-sm font-medium">Registration</span>
          </div>
          <h2 className="text-3xl font-bold mb-6">Register Your Free Account</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-1/2 p-3 rounded border-gray-400 border  text-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-1/2 p-3 rounded border-gray-400 border  text-white focus:outline-none"
              />
            </div>
            <div className="flex gap-4">
              <input
                type="tel"
                placeholder="Phone*"
                className="w-1/2 p-3 rounded  border-gray-400 border  text-white  focus:outline-none"
              />
              <select className="w-1/2 p-3  rounded  border-gray-400 border text-white focus:outline-none">
                <option className='text-black'>Address*</option>
                <option className='text-black'>USA</option>
                <option className='text-black'>UK</option>
                <option className='text-black'>Canada</option>
              </select>
            </div>
            <textarea
              placeholder="Message*"
              className="w-full p-3 rounded border-gray-400 border  text-white focus:outline-none"
              rows="3"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold py-2 px-6 rounded hover:bg-gray-100"
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