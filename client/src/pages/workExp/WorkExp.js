import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './WorkExp.css';
import { FaReact } from "react-icons/fa";

const WorkExp = () => {
  return (
    <>
    <div className='work' id='workexp'>
        <div className='container work-exp'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                Work Experience
            </h2>
            <hr />
            <VerticalTimeline>
            <VerticalTimelineElement className='vertical-timeline-element--work'
            contentStyle={{ background: 'white', color: 'black' }} 
            contentArrowStyle={{ borderRight: '7px solid gray' }}
            date="2021-2022" 
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<FaReact />}>
            <h3 className="vertical-timeline-element-title">Collabra</h3>
            <h4 className="vertical-timeline-element-subtitle">Intern</h4>
            <p>In IT Department as android developer for 3 months</p>
            </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </div>
    </>
  )
}

export default WorkExp;