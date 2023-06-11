import React from 'react';
import Additional from '../../Pages/Additional';
import Instructor from '../../Pages/Instructor';
import PopularClasses from '../../Pages/PopularClasses';
import Slider from '../../Pages/Slider';

const Home = () => {
    return (
        <div>
    {/* <Slider></Slider>  */}
    <Slider></Slider>
    <PopularClasses></PopularClasses> 
  <Instructor></Instructor>
  <Additional></Additional>
        </div>
    );
};

export default Home;