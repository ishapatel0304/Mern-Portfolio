import React from 'react';
import { MdSchool } from "react-icons/md";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Educations.css';

const Education = () => {
  return (
    <>
        <div className='education' id='education'>
            <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                Education Details
            </h2>
            <hr />
        
        <VerticalTimeline>
        <VerticalTimelineElement className='vertical-timeline-element--work'
            contentStyle={{ background: 'white', color: 'black' }} 
            contentArrowStyle={{ borderRight: '7px solid gray' }}
            date="2022-Present" 
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<MdSchool />}>
            <h3 className="vertical-timeline-element-title">BTech</h3>
            <h4 className="vertical-timeline-element-subtitle">IT</h4>
            <p>Completed at Parul University with 8.00 CGPA</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element--work'
            contentStyle={{ background: 'white', color: 'black' }} 
            contentArrowStyle={{ borderRight: '7px solid gray' }}
            date="2019-2022" 
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<MdSchool />}>
            <h3 className="vertical-timeline-element-title">Diploma</h3>
            <h4 className="vertical-timeline-element-subtitle">IT</h4>
            <p>Completed at Parul University with 8.91 CGPA</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element--work'
            contentStyle={{ background: 'white', color: 'black' }} 
            contentArrowStyle={{ borderRight: '7px solid gray' }}
            date="2018-2019" 
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<MdSchool />}>
            <h3 className="vertical-timeline-element-title">Ambe Vidyalaya</h3>
            <h4 className="vertical-timeline-element-subtitle">10th</h4>
            <p>With 61.67% </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    </>
  );
};

export default Education;
