// InstructorSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PaginationIcon from "../assets/icons/Active.svg"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const instructors = [
  {
    name: 'Alexandra Scott',
    title: 'Creative Developer',
    img: 'https://i.ibb.co/kgHMYYHW/image-1.png',
  },
  {
    name: 'Alexandra Scott',
    title: 'Creative Developer',
    img: 'https://i.ibb.co/8LdN8vBG/image-2.png',
  },
  {
    name: 'Alexandra Scott',
    title: 'Creative Developer',
    img: 'https://i.ibb.co/SX1FfYCY/image-3.png',
  },
  {
    name: 'Alexandra Scott',
    title: 'Creative Developer',
    img: 'https://i.ibb.co/jP2PX4w8/image-4.png',
  },
  {
    name: 'Alexandra Scott',
    title: 'Creative Developer',
    img: 'https://i.ibb.co/kgHMYYHW/image-1.png',
  },
  {
    name: 'Alexandra Scott',
    title: 'Creative Developer',
    img: 'https://i.ibb.co/8LdN8vBG/image-2.png',
  },
  {
    name: 'Alexandra Scott',
    title: 'Creative Developer',
    img: 'https://i.ibb.co/SX1FfYCY/image-3.png',
  },
  {
    name: 'Alexandra Scott',
    title: 'Creative Developer',
    img: 'https://i.ibb.co/jP2PX4w8/image-4.png',
  },
];

const InstructorSlider = () => {
  return (
    <div className='bg-[#F0F1FC]'>
      <div className=" px-4 text-center md:w-[1200px] mx-auto py-30">
       <div className=''>
         <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-xs mb-7 font-medium">Instructors</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-14">Our Skilled Instructors</h2>
       </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass: 'swiper-pagination-bullets',
            bulletActiveClass: 'swiper-pagination-bullet-actives',
            renderBullet: function (index, className) {
              return `<span class="${className}">
                ${className.includes('active') ? 
                  `<img src="${PaginationIcon}" alt="active-bullet" class="mx-auto" />` : 
                  '<div class="mx-auto bg-black h-2 w-2 rounded-full"></div>'
                }
              </span>`;
            },
          }}
          navigation={{
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-14"
        >
          {instructors.map((inst, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow p-6 max-w-xs mx-auto">
                <div className="w-54 h-54 mx-auto mb-4">
                  <img
                    src={inst.img}
                    alt={inst.name}
                    className="rounded-full w-full h-full object-cover mb-7"
                  />
                </div>
                <h3 className="text-lg font-bold ">{inst.name}</h3>
                <p className="text-gray-500 text-sm mb-7 mt-4">{inst.title}</p>
                <div className="mb-9 flex justify-center gap-4 text-gray-600 text-lg">
                  <FaFacebookF />
                  <FaXTwitter />
                <FaInstagram />
                <FaYoutube />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination + Navigation */}
        <div className="flex justify-center w-40 relative mx-auto items-center gap-1 mt-14">
          <button className="prev-btn hover:text-black transition text-2xl px-2">&#8592;</button>
          <div className="custom-pagination flex justify-center items-center gap-1 mx-2">
            <style jsx global>{`
              .swiper-pagination-bullet-actives img {
                filter: brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(7458%) hue-rotate(359deg) brightness(99%) contrast(118%);
              }
            `}</style>
          </div>
          <button className="next-btn hover:text-black transition text-2xl px-2">&#8594;</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorSlider;