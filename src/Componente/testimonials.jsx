import { useEffect, useState } from "react";
import { FaStar, } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

export default function TestimonialSlider() {
  const [testimonialData, setTestimonialData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(
    window.innerWidth >= 768 ? 2 : 1
  );

  useEffect(() => {
    const mockData = [
      {
        name: "James",
        title: "Marketing Professional",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        comment:
          "Amazing product. Looking very fresh with a very qualitative design. Love the way it works. The installation was quite easy. Love the support team and their quick responses.",
        rating: 5,
      },
      {
        name: "Amelia",
        title: "Marketing Professional",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        comment:
          "Amazing product. Looking very fresh with a very qualitative design. Love the way it works. The installation was quite easy. Love the support team and their quick responses.",
        rating: 5,
      },
      {
        name: "Michael",
        title: "Product Manager",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        comment:
          "Excellent service and support. The product exceeded our expectations and was delivered ahead of schedule. Highly recommended!",
        rating: 4,
      },
      {
        name: "Sarah",
        title: "UX Designer",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        comment:
          "The intuitive interface and powerful features made our workflow so much smoother. Our team productivity has increased significantly.",
        rating: 5,
      },
    ];
    setTestimonialData(mockData);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newVisibleSlides = window.innerWidth >= 768 ? 2 : 1;
      setVisibleSlides(newVisibleSlides);

      const maxSlide = Math.max(0, testimonialData.length - newVisibleSlides);
      if (currentSlide > maxSlide) {
        setCurrentSlide(maxSlide);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide, testimonialData.length]);

  const maxSlide = Math.max(0, testimonialData.length - visibleSlides);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index) => {
    if (index >= 0 && index <= maxSlide) {
      setCurrentSlide(index);
    }
  };

  const StarRating = ({ count }) => (
    <div className="flex justify-center">
      {Array.from({ length: 5 }, (_, i) => (
        <FaStar
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );

  return (
    <div className="py-12 md:py-16 text-center bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto ">
         <span className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Testimonial</span>
        <h2 className="text-2xl md:text-3xl font-bold mt-7 mb-14 md:mb-12">
          Student's Say About Us
        </h2>

        <div className="relative">
          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex  transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(100 / testimonialData.length) * currentSlide}%)`,
                width: `${(testimonialData.length * 100) / visibleSlides}%`,
              }}
            >
              {testimonialData.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2 md:px-4"
                  style={{ width: `${100 / testimonialData.length}%` }}
                >
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 h-full flex flex-col">
                    {/* Top Section - Avatar and Name */}
                    <div className="flex items-start mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div className="text-left">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                      </div>
                    </div>

                    {/* Middle Section - Comment */}
                    <div className=" my-9 flex-grow">
                      <p className="text-sm text-gray-700 text-left">{testimonial.comment}</p>
                    </div>

                    {/* Bottom Section - Rating */}
                    <div className="flex flex-start">
                      <StarRating count={testimonial.rating} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation and Pagination */}
          {testimonialData.length > visibleSlides && (
            <div className="flex justify-center items-center mt-8 space-x-4">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Previous"
              >
               
                <GoArrowLeft  className="w-4 h-4 text-gray-600" />
              </button>

              {/* Pagination Dots / Images */}
              <div className="flex items-center space-x-2 mx-4">
                {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className="focus:outline-none"
                    aria-label={`Go to slide ${i + 1}`}
                  >
                    {currentSlide === i ? (
                      <img
                        src='/Active.svg'
                        alt={`Slide ${i + 1}`}
                        className="w-4 h-4 rounded-full object-cover "
                      />
                    ) : (
                      <span className="block w-2 h-2 rounded-full bg-gray-300"></span>
                    )}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Next"
              >
              
                <GoArrowRight className="w-4 h-4 text-gray-600"  />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
