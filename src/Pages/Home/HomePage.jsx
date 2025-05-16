import React from 'react';
import Banner from '../../Componente/Banner';
import Top_Courses from '../../Componente/Top_Courses';
import Online_Courses from '../../Componente/Online_Courses';
import About_Us from '../../Componente/About_Us';
import BenefitsSection from '../../Componente/BenefitsSection';
import RegisterSection from '../../Componente/RegisterSection';
import EventListSection from '../../Componente/EventListSection';
import BlogSection from '../../Componente/BlogSection';
import InstructorSlider from '../../Componente/InstructorSlider';
import TestimonialSlider from '../../Componente/testimonials';

const HomePage = () => {
    return (
        <div>
          <Banner></Banner>
          
            <Top_Courses></Top_Courses>
        <Online_Courses></Online_Courses>
        <About_Us></About_Us>
        <BenefitsSection></BenefitsSection>
        <RegisterSection></RegisterSection>
        <EventListSection></EventListSection>
        <InstructorSlider></InstructorSlider>
        <TestimonialSlider></TestimonialSlider>
        <BlogSection></BlogSection>
        </div>
    );
};

export default HomePage;