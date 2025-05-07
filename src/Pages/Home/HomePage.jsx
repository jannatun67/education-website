import React from 'react';
import Banner from '../../Componente/Banner';
import Top_Courses from '../../Componente/Top_Courses';

const HomePage = () => {
    return (
        <div>
          <Banner></Banner>
          <div className=''>
            <Top_Courses></Top_Courses>
          </div>
        </div>
    );
};

export default HomePage;