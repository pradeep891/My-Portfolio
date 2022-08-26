import React from 'react';
import './experience.css';

const Card = props => {
    return(
        <div className="card">
            <span className='head2'>{props.heading}</span>
            <span className='head3'>{props.subheading}</span>
            <li>{props.content1}</li>
            <li><span>{props.link}</span>{props.content2}</li>
        </div>
    );
}
function Experience(){
    return (
        <div className="experience">
            <h1>Experience</h1>
            <Card heading="Executive Member"
             subheading="- Codame, IIIT Bhopal"
                content1="Problem Setter in CodeChef and Codeforces contest organized by the club. "
                link={<a href="https://www.codechef.com/RSLN2022/problems/RSLN2203" target="_blank" rel="noopener noreferrer">MAX PRODUCT</a>}
                content2=" one of my problems, solved partially by only 66 users and solved completely by
only 24 users out of 400 during the contest which left problem accuracy 6.38"
            />
            <Card heading="AlgoRhymes"
                subheading="- DSA Learning Session"
                content1="Organized this session for the juniors and taught them on the topic “string”. "
                content2="This session was attended by 40+ students."
            />
        </div>
    );
}
export default Experience;