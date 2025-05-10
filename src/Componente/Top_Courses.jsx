import React from 'react';
import icon from "../assets/icons/Icon.png"
import icon1 from "../assets/icons/Icon (1).png"
import icon2 from "../assets/icons/Icon (2).png"
import icon3 from "../assets/icons/Icon (3).png"
import icon5 from "../assets/icons/Group.png"
import icon4 from "../assets/icons/Icon (4).png"
import icon7 from "../assets/icons/Icon (5).png"
import icon6 from "../assets/icons/Icon (6).png"




const categories = [
  { title: "Digital Marketing", icon: <img src={icon} alt="" /> },
  { title: "Mobile Application", icon: <img src={icon1} alt="" /> },
  { title: "Web Development", icon:<img src={icon2} alt="" /> },
  { title: "Cloud Computing", icon: <img src={icon3} alt="" /> },
  { title: "Finance & Accounting", icon: <img src={icon4} alt="" /> },
  { title: "UI/UX Design", icon:<img src={icon5} alt="" /> },
  { title: "Business Analytics", icon: <img src={icon6} alt="" /> },
  { title: "Art & Humanities", icon: <img src={icon7} alt="" />},
];
const Top_Courses = () => {


    return (
    <section className="md:py-30 py-16  bg-white text-center">
      <div className="mb-4">
        <span className="text-sm px-4 py-1 rounded-full bg-purple-100 text-purple-600 font-medium mb-[30px]">
          Course Categories
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
        Explore Top Courses Categories <br /> That Change Yourself
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl hover:shadow-md transition text-left"
          >
            <div className=" ">
              <div className="text-3xl text-purple-600 mb-[30px] ">{cat.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-[22px]">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500 mb-[15px]">04 Courses</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
};

export default Top_Courses;