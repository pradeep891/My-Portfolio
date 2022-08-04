import React from 'react';
import './footer.css';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
            <div className="footer">
                <h1>Get in Touch...</h1>
                <br />
                <ul>
                    <li className='flex-item'><a href="https://twitter.com/Pradeep12335" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                    <li className='flex-item'><a href="https://www.instagram.com/pradeep.k_s" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                    <li className='flex-item'><a href="https://www.linkedin.com/in/pradeep-k-sahu/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></li>
                    <li className='flex-item'><a href="https://github.com/pradeep891" target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
                    <li className='flex-item'><a href="https://www.facebook.com/pradeepksahu08/" target="_blank" rel="noopener noreferrer"><FaFacebook/></a></li>
                </ul>
                
                <h6>&#169;Copyright 2022</h6>
            </div>
    );
}

export default Footer;