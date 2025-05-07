import React from 'react';
import icon from "../assets/icons/Icon.png"
import icon1 from "../assets/icons/Icon (1).png"
import icon2 from "../assets/icons/Icon (2).png"
import icon3 from "../assets/icons/Icon (3).png"
import icon5 from "../assets/icons/Group.png"
import icon4 from "../assets/icons/Icon (4).png"
import icon7 from "../assets/icons/Icon (5).png"
import icon6 from "../assets/icons/Icon (6).png"


const Top_Courses = () => {
    return (
        <div className='py-16 md:w-[1200px] mx-auto'>
            <div className='text-center'>
                <p className="text-[#5F2DED] py-1  bg-[#DED4F7] rounded-[20px] w-[145px]  mx-auto">Course Categories</p>
                <h2 className='font-bold md:text-4xl text-xl'>Explore Top Courses Categories <br />That Change Yourself</h2>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-3 py-14'>

                <div className='border-[1px] border-[#E8E9EC] p-5 rounded-[10px]'>
                    <div className=''>
                        <img className='mb-3'  src={icon} alt="" />
                    </div>
                   <div className=''>
                   <h3 className='font-semibold text-[22px]'>Digital Marketing</h3>
                   <p className='text-[#4D4E50]'>04 Courses</p>
                   </div>
                </div>

                <div className='border-[1px] border-[#E8E9EC] p-5 rounded-[10px]'>
                    <div className=''>
                        <img className='mb-3'  src={icon1} alt="" />
                    </div>
                   <div className=''>
                   <h3 className='font-semibold text-[22px]'>Mobile Application</h3>
                   <p className='text-[#4D4E50]'>04 Courses</p>
                   </div>
                </div>
                <div className='border-[1px] border-[#E8E9EC] p-5 rounded-[10px]'>
                    <div className=''>
                        <img className='mb-3'  src={icon2} alt="" />
                    </div>
                   <div className=''>
                   <h3 className='font-semibold text-[22px]'>Web Development</h3>
                   <p className='text-[#4D4E50]'>04 Courses</p>
                   </div>
                </div>

                <div className='border-[1px] border-[#E8E9EC] p-5 rounded-[10px]'>
                    <div className=''>
                        <img className='mb-3'  src={icon3} alt="" />
                    </div>
                   <div className=''>
                   <h3 className='font-semibold text-[22px]'>Cloud Computing</h3>
                   <p className='text-[#4D4E50]'>04 Courses</p>
                   </div>
                </div>

                <div className='border-[1px] border-[#E8E9EC] p-5 rounded-[10px]'>
                    <div className=''>
                        <img className='mb-3'  src={icon5} alt="" />
                    </div>
                   <div className=''>
                   <h3 className='font-semibold text-[22px]'>Finance & Accounting</h3>
                   <p className='text-[#4D4E50]'>04 Courses</p>
                   </div>
                </div>

                <div className='border-[1px] border-[#E8E9EC] p-5 rounded-[10px]'>
                    <div className=''>
                        <img className='mb-3'  src={icon4} alt="" />
                    </div>
                   <div className=''>
                   <h3 className='font-semibold text-[22px]'>UI/UX Design</h3>
                   <p className='text-[#4D4E50]'>04 Courses</p>
                   </div>
                </div>

                <div className='border-[1px] border-[#E8E9EC] p-5 rounded-[10px]'>
                    <div className=''>
                        <img className='mb-3'  src={icon7} alt="" />
                    </div>
                   <div className=''>
                   <h3 className='font-semibold text-[22px]'>Business Analytics</h3>
                   <p className='text-[#4D4E50]'>04 Courses</p>
                   </div>
                </div>

                <div className='border-[1px] border-[#E8E9EC] p-5 rounded-[10px]'>
                    <div className=''>
                        <img className='mb-3'  src={icon6} alt="" />
                    </div>
                   <div className=''>
                   <h3 className='font-semibold text-[22px]'>Art & Humanities</h3>
                   <p className='text-[#4D4E50]'>04 Courses</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Top_Courses;