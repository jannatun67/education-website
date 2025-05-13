import React from 'react';
import check from "../assets/icons/check_01.png"
import icon from "../assets/icons/_icon.png"
import icon1 from "../assets/icons/_icon (1).png"
import icon2 from "../assets/icons/_icon (2).png"
import icon3 from "../assets/icons/_icon (3).png"


const BenefitsSection = () => {
    return (
         <section className="md:w-[1200px] mx-auto bg-[#F0F1FC]  px-4 md:px-16 py-30">
      <div className=" grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-[#ece9fb] text-[#7b4efe] text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits of Learning <br /> With Us
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Discover why thousands of learners choose us to achieve their goals and elevate their skills.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span><img src={check } alt="" /> </span> Expert-Led Courses
            </li>
            <li className="flex items-center gap-2">
              <span><img src={check } alt="" /></span> The Insight Gained is much Wider
            </li>
            <li className="flex items-center gap-2">
              <span><img src={check } alt="" /></span> Certification Opportunities
            </li>
          </ul>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { value: "95%", label: "Satisfied Students",icon: <img src={icon} alt="" /> },
            { value: "140+", label: "Courses & Video",icon: <img src={icon1} alt="" /> },
            { value: "58+", label: "Award Wins",icon: <img src={icon2} alt="" /> },
            { value: "150+", label: "Registered Enrolls",icon: <img src={icon3} alt="" /> },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md py-6 px-4 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-[#7b4efe] text-white rounded-full flex items-center justify-center text-xl font-semibold mb-3">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900">{item.value}</h4>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default BenefitsSection;