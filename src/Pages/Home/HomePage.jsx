import React from 'react';
import Banner from '../../Componente/Banner';
import Top_Courses from '../../Componente/Top_Courses';
import Online_Courses from '../../Componente/Online_Courses';
import About_Us from '../../Componente/About_Us';

const HomePage = () => {
    return (
        <div>
          <Banner></Banner>
          
            <Top_Courses></Top_Courses>
        <Online_Courses></Online_Courses>
        <About_Us></About_Us>
        </div>
    );
};

export default HomePage;