import React from 'react';
import img from '../../components/Menus/img.jpeg'
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
    <Jump>
        <div className='about' id='about'>
            <div className='row'>
                <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                <img 
                src={img}
                alt="profile_pic" />
                </div>
                <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                    <h1>About Me</h1>
                    <p>
                    I'm an enthusiastic IT professional, passionate about all things tech. 
                    I thrive on finding innovative solutions to complex problems and enjoy 
                    collaborating with others to achieve shared goals. With a solid background 
                    in IT and a continuous drive for learning, I bring a blend of technical 
                    expertise and creative thinking to every project. Whether it's troubleshooting 
                    issues, developing new software solutions, or exploring emerging technologies, 
                    I'm always eager to dive in and make a positive impact. Let's connect and explore 
                    how we can leverage technology to drive meaningful change together!
                    </p>
                </div>
            </div>
        </div>
        </Jump>
    </>
  )
}

export default About