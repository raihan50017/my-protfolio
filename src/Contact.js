import React from 'react';
import './Contact.css';
import Slide from 'react-reveal/Slide';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Contact = () => {
    return (
        <div id="contact" className="contact__container">
            <Slide left>
                <h1>Con<span style={{ color: 'orange' }}>tact</span></h1>
            </Slide>
            <div className="contact__main m-5">
                <Slide left><h4 className="text-center"><PhoneIcon></PhoneIcon> +880 1726426154</h4></Slide>
                <Slide right> <h4 className="text-center"><MailOutlineIcon></MailOutlineIcon> aburaihan50017@gmail.com</h4></Slide>
            </div>
        </div>
    );
};

export default Contact;