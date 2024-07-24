import React from 'react';
import img from './img.jpg';
import image from './img1.jpg';
import imag from './img2.jpg';
import './Project.css';
import Spin from "react-reveal/Spin";

const Project = () => {
  return (
    <>
        <div className='container project' id='project'>
            <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                TOP RECENT PROJECTS
            </h2>
            <hr />
            <p className='pb-3 text-center'>
            In my portfolio, you'll find a range of web projects, each designed to offer unique user experiences. 
            Using different technologies, I've built e-commerce sites, personal portfolios, and social media platforms. 
            These projects demonstrate my skills in both frontend and backend development, showing my ability to create 
            user-friendly interfaces and reliable backend systems. I focus on collaboration and effective project management to 
            ensure each project meets high standards of quality and functionality.
            </p>
            {/* card design */}
            <div className='row' id='ads'>
            <Spin>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Full Stack</span>
                            <img src={img} alt='Project1'/>
                        </div>
                        <div className='card-image-overly m-auto'>
                            <span className='card-detail-badge'>Node</span>
                            <span className='card-detail-badge'>Express</span>
                            <span className='card-detail-badge'>React</span>
                            <span className='card-detail-badge'>Mongodb</span>
                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title m-auto'>
                                <h5 className='text-uppercase'>
                                    Shopping Website
                                </h5>
                            </div>
                            <a className='ad-btn' href='https://github.com/codewithsadee/anon-ecommerce-website'>View</a>
                        </div>
                    </div>
                </div>
        <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Mobile App</span>
                            <img src={image} alt='Project1'/>
                        </div>
                        <div className='card-image-overly m-auto'>
                            <span className='card-detail-badge'>React Native</span>
                            <span className='card-detail-badge'>IOS / ANDROID</span>
                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title m-auto'>
                                <h5 className='text-uppercase'>
                                    Coding App
                                </h5>
                            </div>
                            <a className='ad-btn' href='https://github.com/WrathChaos/react-native-header-view'>View</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Backend</span>
                            <img src={imag} alt='Project1'/>
                        </div>
                        <div className='card-image-overly m-auto'>
                            <span className='card-detail-badge'>Node</span>
                            <span className='card-detail-badge'>Express</span>
                            <span className='card-detail-badge'>NoSQL</span>
                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title m-auto'>
                                <h5 className='text-uppercase'>
                                    Job Portal
                                </h5>
                            </div>
                            <a className='ad-btn' href='https://github.com/WrathChaos/react-native-header-view'>View</a>
                        </div>
                    </div>
                </div>
                </Spin>
            </div>
        </div>
    </>
  )
}

export default Project;