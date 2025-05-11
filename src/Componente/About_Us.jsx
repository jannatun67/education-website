import React from 'react';
import aboutUsImage from "../assets/About/Image (1).png"
import check  from "../assets/icons/check_01.png"

const About_Us = () => {
    return (
        <div className=''>
            <div className="hero md:w-[1200px] mx-auto min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left my-7">
        <p> <button className="px-4 py-1 font-medium  bg-[#e4e7ff] text-[#6366f1] rounded-full mb-3">
         About Us
          </button> </p>
      <h1 className="text-5xl font-bold ">Grow Your Learning Skills With Us</h1>
      <p className="py-6 ">
       Unlock your full potential and achieve your personal and professional goals through our diverse range of courses and expert-led programs. Whether you're aiming to master a new skill, 
      </p>
      <div>
        <p className='flex gap-2 mb-[18px]'><img src={check} alt="" /> Comprehensive course categories</p>
           <p className='flex gap-2 mb-[18px]'><img src={check} alt="" /> Comprehensive course categories</p>
          <p className='flex gap-2 mb-[18px]'><img src={check} alt="" /> Comprehensive course categories</p>
          <p className='flex gap-2 mb-[18px]'><img src={check} alt="" /> Comprehensive course categories</p>
      </div>
    </div>
    <div className="card bg-base-100 w-full">
      <div className="card-body">
        <img src={aboutUsImage } alt="" />
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default About_Us;