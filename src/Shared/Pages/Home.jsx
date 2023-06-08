import React from 'react';
import Instructor from '../../Pages/Instructor';
import PopularClasses from '../../Pages/PopularClasses';
import Slider from '../../Pages/Slider';

const Home = () => {
    return (
        <div>
    <Slider></Slider> 
    <PopularClasses></PopularClasses> 
  <Instructor></Instructor>
        </div>
    );
};

export default Home;