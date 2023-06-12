import React, { useEffect, useState } from 'react';
import Additional from '../../Pages/Additional';
import Instructor from '../../Pages/Instructor';
import PopularClasses from '../../Pages/PopularClasses';
import Slider from '../../Pages/Slider';

const Home = () => {
    const [theme,Settheme]=useState("light")

    useEffect(()=>{
if(window.matchMedia("(prefers-color-scheme:dark)").matches){
    Settheme('dark')
}
else{
    Settheme('light')
}
    },[])
    useEffect(()=>{
if(theme==='dark'){
    document.documentElement.classList.add('dark')
}
else{
    document.documentElement.classList.remove('dark')
}
        
    },[theme])
    const handlethemeswitch=()=>{
        Settheme(theme==="dark"?"dark":'light')
    }
    return (
        <div>
   
    <Slider></Slider>
    <PopularClasses handlethemeswitch={handlethemeswitch}></PopularClasses> 
  <Instructor></Instructor>
  <Additional></Additional>
        </div>
    );
};

export default Home;