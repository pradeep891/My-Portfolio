import React from 'react';
import logo from '../image/iiit-logo.png'
import './Education.css';

function Education () {
    return (
        <div className='education'>
            <h1 className='heading'>Education</h1>
            <img src={logo} alt="IIIT Bhopal Logo" />
            <h1 className='college-name'>Indian Institute of Information Technology, Bhopal</h1>
            <br />
            <ul>
                <li>Degree: B.Tech</li>
                <li>Specialization: Computer Science & Engineering </li>
                <li>Passing Year: 2023</li>
                <li>CGPA: 8.14/10.0 (till 6th sem)</li>
            </ul>
        </div>
    );
}

export default Education;