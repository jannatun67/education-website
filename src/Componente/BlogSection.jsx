import React from "react";
import Blog1 from "../assets/Blog/Image (3).png";
import { GoArrowRight } from "react-icons/go";
import { FaCalendarWeek } from "react-icons/fa";
import Blog2 from "../assets/Blog/image 3899.png"
import Blog3 from "../assets/Blog/image 3900.png"

// const blogs = [
//   {
//     id: 1,
//     date: 'July 12, 2024',
//     title: 'Why Lifelong Learning Matters Today',
//     description: "In today’s fast-paced and ever-changing world, staying relevant",
//     image: '/images/blog1.jpg',
//   },
//   {
//     id: 2,
//     date: 'July 12, 2024',
//     title: 'Why Lifelong Learning Matters Today',
//     description: "In today’s fast-paced and ever-changing world, staying relevant",
//     image: '/images/blog2.jpg',
//   },
//   {
//     id: 3,
//     date: 'July 12, 2024',
//     title: 'Why Lifelong Learning Matters Today',
//     description: "In today’s fast-paced and ever-changing world, staying relevant",
//     image: '/images/blog3.jpg',
//   },
// ];

const BlogSection = () => {
  return (
    <section className="py-20 px-4 md:px-12 bg-[#F5F4FC]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            News & Articles
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Latest Blog Posts
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  md:grid-rows-2 gap-6">
          <div className="md:row-span-2">
            <div className="card bg-base-100  shadow-sm">
              <figure>
                <img src={Blog1} alt="Shoes" />
              </figure>
              <div className="card-body">
                <p className="flex gap-1 items-center">
                  <span className="text-primary">
                    <FaCalendarWeek />
                  </span>{" "}
                  July 12,2024
                </p>
                <h2 className="card-title">
                  Why Lifelong Learning Matters Today
                </h2>
                <p>
                  In today’s fast-paced and ever-changing world, staying
                  relevant
                </p>
                <div className="flex gap-1 items-center font-medium">
                  Learn More <GoArrowRight />
                </div>
              </div>
            </div>
          </div>

        
            <div>
              <div className="card card-side bg-base-100 shadow-sm h-full w-full">
                <figure>
                  <img
                    src={Blog2}
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                <p className="flex gap-1 items-center">
                  <span className="text-primary">
                    <FaCalendarWeek />
                  </span>{" "}
                  July 12,2024
                </p>
                 <h2 className="card-title">
                  Why Lifelong Learning Matters Today
                </h2>
                   <p>
                  In today’s fast-paced and ever-changing world, staying
                  relevant
                </p>
                   <div className="flex gap-1 items-center font-medium">
                  Learn More <GoArrowRight />
                </div>
                </div>
              </div>
            </div>

            <div>
              <div className="card card-side bg-base-100 shadow-sm h-full w-full">
                <figure>
                  <img
                    src={Blog3}
                    alt="Movie"
                    className="object-cover"
                  />
                </figure>
                 <div className="card-body">
                <p className="flex gap-1 items-center">
                  <span className="text-primary">
                    <FaCalendarWeek />
                  </span>{" "}
                  July 12,2024
                </p>
                 <h2 className="card-title">
                  Why Lifelong Learning Matters Today
                </h2>
                   <p>
                  In today’s fast-paced and ever-changing world, staying
                  relevant
                </p>
                   <div className="flex gap-1 items-center font-medium">
                  Learn More <GoArrowRight />
                </div>
                </div>
              </div>
            </div>
       
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
