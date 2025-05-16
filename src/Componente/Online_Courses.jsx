import React, { useEffect, useState } from 'react';
import instructor from "../assets/instructor/instructor.png"
import book from "../assets/icons/book.png"
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router';

const Online_Courses = () => {
const [courses, setCourses] = useState([]);
const [filteredCourses, setFilteredCourses] = useState([]);
const [activeCategory, setActiveCategory] = useState("All");

useEffect(() => {
  fetch('courses.json')
    .then(res => res.json())
    .then(data => {
      setCourses(data);
      setFilteredCourses(data);
    });
}, []);

const handleFilter = (category) => {
  setActiveCategory(category);
  if (category === "All") {
    setFilteredCourses(courses);
  } else {
    const filtered = courses.filter(course => course.category === category);
    setFilteredCourses(filtered);
  }
};


    return (
        <section className="pb-30 px-4 bg-[#F0F1FC] min-h-screen">
        <div className="text-center mb-10">
          <button className="px-4 py-1 font-medium mt-16 md:mt-30 bg-[#e4e7ff] text-[#6366f1] rounded-full mb-4">
          Top Popular Course
          </button>
          <h2 className="text-5xl md:mt-[30px] mt-[15px] md:mb-[50px] mb-[25px] font-bold text-gray-800">
            Perfect Online Course <br /> for Your Career
          </h2>

        <div className="mt-4 md:mb-[60px] mb-[30px] space-x-4 font-medium text-gray-500">
  {["All", "Development", "Marketing", "Business", "Finance"].map((cat) => (
    <button
      key={cat}
      onClick={() => handleFilter(cat)}
      className={`hover:text-[#E51C58] ${
        activeCategory === cat ? "text-[#E51C58] font-semibold" : ""
      }`}
    >
      {cat}
    </button>
  ))}
</div>


        </div>
  
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
       {filteredCourses.map((course) => (

            <div key={course.id} className="bg-white rounded-xl  p-4 relative group  transition duration-300">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-60 object-cover rounded-lg mb-6"
              />
              <span className="absolute top-7 left-7 bg-pink-600 text-white text-xs px-3 py-1 rounded-full">
                {course.tag}
              </span>

              <div className="mt-3 flex justify-between items-center">
                  <span className="font-medium text-[#4D4E50] flex items-center gap-2"><img src={book} alt="" /> 10 Lessons</span>
                  <div className="text-xs text-gray-500 font-medium">
                    ⭐ {course.rating} • {course.enrolled}
                  </div>
                </div>

              <div className="mt-4">
                <h3 className="text-[20px] mb-[20px] font-semibold text-gray-800">
                  {course.title}
                </h3>
                <p className=" text-gray-500 mb-[20px] font-medium mt-1 flex items-center gap-2"><img className='rounded-full h-[40px] w-[40px] object-cover' src={instructor} alt="" /> {course.instructor}</p>
                <hr className='text-gray-100' />
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-indigo-600 font-bold">{course.price}</span>
                 <Link to={`/course${course?.id}`}> <div className="text-xs text-[#4D4E50] font-medium flex items-center gap-2">
                  View Details <span><GoArrowUpRight /></span>
                  </div></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Online_Courses;