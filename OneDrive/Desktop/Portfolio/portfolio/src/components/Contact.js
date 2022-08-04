import React from 'react';
import './contact.css';
function Contact() {
    return (
        <>
            <div className="contact">
                <h1>Contact Me</h1>

                <form action="" className='center'>
                    <input type="text" placeholder='Name' /> <br />
                    <input type="email" placeholder='Email' /> <br />
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Message...'></textarea>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </>

    );
}

export default Contact;