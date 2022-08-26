import React from 'react'
import profile from '../image/profile2.jpg'
import './about.css';

const resume = "https://drive.google.com/file/d/1WEtli3BbqsyBxvXZ9n-AyfqCLRyLjIu7/view?usp=sharing";

function About() {
    return (
        <div className='about'>
            <h1>About Me</h1>
            <img src={profile} alt="My_Image" />
            <h2>I'm Pradeep Kumar Sahu</h2>
            <p>I am a constant learner and very enthusiastic for working with new people and new technologies. I have good problem solving skills. I am also into web development. Currently I am exploring more into new frameworks. I believe in team work.I am determined to give my best at everything that I will be assigned to.</p>

           <a href={resume} target="_blank" rel="noopener noreferrer"><button>Download Resume</button></a>
        </div>
    );
}
// onMouseOver={mOver} onMouseOut={mOut}

export default About;