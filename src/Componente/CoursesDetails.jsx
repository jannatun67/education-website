import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import BrainImage from "../assets/detailsPage/photo-1618886614638-80e3c103d31a 1.png";
import instructor from "../assets/instructor/instructor.png"
import book from "../assets/icons/book.png"
import { LuBook } from "react-icons/lu";
import { FaPlay } from "react-icons/fa6";

import { HiMenuAlt1 } from "react-icons/hi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiUserVoiceLine } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import EnrolUser1 from "../assets/detailsPage/Image.png";
import EnrolUser2 from "../assets/detailsPage/Image2.png";
import EnrolUser3 from "../assets/detailsPage/image3.png";
import { GoArrowUpRight, GoChevronDown } from "react-icons/go";
import { LuLockKeyhole } from "react-icons/lu";
import { GoChevronRight } from "react-icons/go";
import Instructor from "../assets/detailsPage/img.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const CoursesDetails = () => {
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [singleCourses, setSingleCourses] = useState([]);
  const [expandedLesson, setExpandedLesson] = useState(null);

  const reviews = [
    {
      name: "Henefar Willium",
      date: "25 may 2022",
      rating: 3,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      review:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera tion in some form, injected humour, or randomised words which don't look.",
    },
    {
      name: "Willium Maria",
      date: "25 may 2022",
      rating: 3,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera tion in some form, injected humour, or randomised words which",
    },
  ];

  useEffect(() => {
    fetch('/courses.json')
      .then(res => res.json())
      .then(data => {
        setCourses(data);
        const singleData = [...data]?.filter(data => data.id == id);
        setSingleCourses(singleData[0] || {});
        setLoader(false);
      });
  }, [id]);

  const toggleLesson = (index) => {
    if (expandedLesson === index) {
      setExpandedLesson(null);
    } else {
      setExpandedLesson(index);
    }
  };

  if (loader) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }

  if (!singleCourses || Object.keys(singleCourses).length === 0) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, #120C25cc, #120C25cc), url(https://i.ibb.co/SwyFKSBz/Image-3.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="h-[550px] mb-14 text-white"
      >
        <div className="max-w-7xl mx-auto flex-col-reverse lg:flex-row-reverse">
          <div className="py-28 max-w-[581px] pl-10">
            <h1 className="md:text-5xl text-2xl font-bold mb-9">
              {singleCourses.title || "The Power of Podcast for Story telling"}
            </h1>
            <p className="mb-6">
              {singleCourses.description || "Embark on a comprehensive React journey with our React Front To Back course. Designed for beginners and seasoned developers alike, this course covers..."}
            </p>
            <div className="flex gap-6 mb-6">
              <p className="flex gap-1 items-center">
                <span className="text-[#FF9415]">
                  <FaStar />
                </span>{" "}
                {singleCourses.rating || "4.50"}(2)
              </p>
              <p>{singleCourses.students || "1"} Student</p>
            </div>
            <p className="mb-7 font-medium text-[20px]">${singleCourses.price || "767.50"}</p>
            <div className="flex items-center gap-3">
              <img
                className="w-[30px] h-[30px] border-2 border-white object-cover rounded-2xl"
                src={BrainImage}
                alt=""
              />
              <p>Brain</p>
              <p className="bg-[#D9D9D9] h-[3px] w-[3px] mt-[2px] rounded-full"></p>
              <p>Dec 16, 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 max-w-[1180px] mx-auto">
        <div className="max-w-[787px] mx-auto bg-base-100">
          <div className="card card-md shadow-sm mb-10">
            <div className="card-body relative">
              <img src={singleCourses.image} alt="" />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-2 rounded-full shadow">
                  <FaPlay className="text-[#5F2DED] w-6 h-6" />
                </div>
              </button>
            </div>
          </div>
          <div className="shadow-xl py-7 pl-10 mb-10 border-t-1 border-gray-100 rounded-4xl">
            <div className="flex gap-12 items-center font-semibold">
              <p className="text-[#5F2DED]">Course Info</p>
              <p>Lessons</p>
              <p>Instructor</p>
              <p>Reviews</p>
            </div>
          </div>

          <div className="border-t-1 border-gray-200 mb-10 shadow-xl rounded-[5px] pt-5 px-7">
            <div className="mb-6">
              <p className="mb-4 font-semibold text-[20px]">About Course</p>
              <hr className="text-gray-300" />
            </div>
            <p className="text-[#4D4E50]">
              Our course is designed to provide a comprehensive and engaging
              learning experience that empowers you to achieve your goals.
              Whether you're looking to enhance your career, develop new skills,
              or pursue a passion, this course is tailored to meet your unique
              needs.{" "}
            </p>
            <div className="py-5">
              <p className="text-[#4D4E50] mb-5">
                <span className="font-medium">● In-Depth Knowledge:</span> Dive into well-structured modules that cover all essential aspects of the subject.
              </p>
              <p className="text-[#4D4E50] mb-5">
                <span className="font-medium">● Practical Skills:</span> Learn hands-on techniques and strategies that you can apply immediately in real-world scenarios.
              </p>
              <p className="text-[#4D4E50] mb-5">
                <span className="font-medium">● Expert Guidance: </span> Benefit from the insights and experience of top-notch instructors who are leaders in their fields.
              </p>
              <p className="text-[#4D4E50] mb-5">
                <span className="font-medium">● Flexibility: </span> Study at your own pace with online access to resources, lessons, and support.
              </p>
            </div>
            <p className="text-[#4D4E50] pb-10">
              This course is perfect for beginners, professionals looking to upskill, or anyone passionate about the subject. Whether you're starting fresh or seeking advanced knowledge, we've got you covered.Join us on this learning journey and take the first step toward achieving your dreams. Your growth starts here!
            </p>
          </div>

          <div className="border-t-1 border-gray-200 mb-10 shadow-xl rounded-[5px] pt-5 px-7">
            <div className="mb-6">
              <p className="mb-4 font-semibold text-[20px]">Lessons</p>
              <hr className="text-gray-300" />
            </div>

            <div className="shadow-xl py-5 rounded-2xl">
              <div 
                className="bg-[#919EAB1F] py-5 pl-5 flex items-center justify-between cursor-pointer"
                onClick={() => toggleLesson(1)}
              >
                <div className="flex items-center gap-1">
                  <FaPlay />
                  <p>Lesson 1</p>
                </div>
                <div className="flex items-center gap-3 pr-3 text-[#4D4E50]">
                  <p>02:23</p>
                  <span className="text-[20px]">
                    {expandedLesson === 1 ? <GoChevronDown /> : <GoChevronRight />}
                  </span>
                </div>
              </div>
              {expandedLesson === 1 && (
                <p className="text-[#637381] px-5 py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus turpis nunc etiam elit sit sem iaculis. Ornare blandit egestas facilisis facilisi.
                </p>
              )}
            </div>

            {[2, 3, 4, 5, 6, 7, 8].map((lessonNum) => (
              <div key={lessonNum} className=" px-4 my-3">
                <div className="flex items-center justify-between text-[#4D4E50] my-3">
                  <p className="flex gap-2 items-center">
                    <span><LuLockKeyhole /></span> Lesson {lessonNum}
                  </p>
                  <p className="flex gap-4 items-center">
                    02:23 <span><GoChevronRight /></span>
                  </p>
                </div>
                <hr className="text-gray-300 pt-5" />
              </div>
            ))}
          </div>

          <div className="border-t-1 p-6 border-gray-200 bg-white rounded-xl shadow-xl space-y-4">
            <h2 className="text-lg font-semibold pb-2">Instructor</h2>
            <hr className="text-gray-300" />
            <div className="flex items-start space-x-6 mt-8">
              <img
                className="w-48 h-48 rounded-full object-cover"
                src={Instructor}
                alt="Instructor"
              />
              <div className="flex-1 space-y-2">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cameron Williamson</h3>
                  <p className="text-sm text-gray-600 mb-3">Designer, Animator</p>
                </div>
                <div className="flex items-center text-sm text-gray-700 mb-5">
                  <FaStar className="text-orange-500 mr-1" />
                  <span className="font-semibold">4.8</span>
                  <span className="ml-1 text-gray-500">(106 ratings)</span>
                </div>
                <p className="text-sm text-gray-600 mb-10">
                  Our course is designed to provide a comprehensive and engaging learning experience that empowers you to achieve your goals. Whether you're looking to enhance your career, develop new skills,
                </p>
                <div className="flex space-x-4 text-gray-600 pt-1">
                  <FaFacebookF className="text-[#6366f1] cursor-pointer" />
                  <FaXTwitter className="hover:text-black cursor-pointer" />
                  <FaInstagram className="hover:text-pink-600 cursor-pointer" />
                  <FaYoutube className="hover:text-red-600 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-gray-200 border-t-1 p-6 bg-white rounded-xl shadow-xl space-y-4 my-10">
            <h2 className="text-lg font-semibold pb-2">Reviews</h2>
            <hr className="text-gray-300 mb-8" />
            {reviews.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 py-4 last:border-none">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover ml-6"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-base mb-[10px]">{item.name}</h3>
                    <span className="text-sm font-medium text-[#E51C58] mb-2">{item.date}</span>
                  </div>
                  <div className="flex text-[#FF9415] mb-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar key={i} className={i < item.rating ? "" : "text-gray-300"} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{item.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:-mt-[390px]">
          <div className="max-w-sm p-3 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={singleCourses.image}
                alt="Course"
                className="w-full h-48 object-cover px-2 py-2"
              />
              <span className="absolute top-7 left-5 bg-pink-600 text-white text-xs px-2 py-1 rounded">
                {singleCourses.category || "Finance"}
              </span>
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-2 rounded-full shadow">
                  <FaPlay className="text-[#5F2DED] w-6 h-6" />
                </div>
              </button>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-xl font-bold text-[#5F2DED]">${singleCourses.price || "767.50"}</div>
                <div className="flex gap-2 items-center text-sm text-gray-600">
                  <div className="flex">
                    <img src={EnrolUser1} alt="" />
                    <img className="-ml-3" src={EnrolUser2} alt="" />
                    <img className="-ml-3" src={EnrolUser3} alt="" />
                  </div>
                  <span>+19 enrolled</span>
                </div>
              </div>

              <button className="w-full bg-[#5F2DED] text-white py-2 rounded-lg font-medium mb-4">
                Enrolled Now
              </button>

              <h3 className="text-md font-semibold mb-2">Course Includes</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <LuBook className="w-4 h-4 mr-2 text-[#5F2DED]" />
                  10 Lessons
                </li>
                <hr className="text-gray-200" />
                <li className="flex items-center">
                  <HiMenuAlt1 className="w-4 h-4 mr-2 text-[#5F2DED]" /> 12
                  Topics
                </li>
                <hr className="text-gray-200" />
                <li className="flex items-center">
                  <IoIosHelpCircleOutline className="w-4 h-4 mr-2 text-[#5F2DED]" />{" "}
                  1 Quiz
                </li>
                <hr className="text-gray-200" />
                <li className="flex items-center">
                  <RiUserVoiceLine className="w-4 h-4 mr-2 text-[#5F2DED]" />{" "}
                  Instructor
                </li>
                <hr className="text-gray-200" />
                <li className="flex items-center">
                  <AiOutlineSafetyCertificate className="w-4 h-4 mr-2 text-[#5F2DED]" />{" "}
                  Course Certificate
                </li>
              </ul>
              <hr className="text-gray-200 mt-4" />
              <div className="mt-2 flex justify-between items-center pt-3 text-sm text-gray-700">
                <span className="text-red-500 font-medium">
                  Course Duration:
                </span>{" "}
                <span className="font-semibold">20h 15m</span>
              </div>
            </div>

          </div>
        </div>
      </div>


        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-6xl mx-auto mb-30">
       {courses.slice(0,3).map((course) => (

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
                 <Link to={`/course/${course?.id}`}> <div className="text-xs text-[#4D4E50] font-medium flex items-center gap-2">
                  View Details <span><GoArrowUpRight /></span>
                  </div></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default CoursesDetails;