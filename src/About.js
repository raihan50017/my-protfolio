import React from 'react';
import Fade from 'react-reveal/Fade';
import './About.css';
import aboutimg from './images/aboutimg.jpg';
import Slide from 'react-reveal/Slide';
import Typed from 'react-typed';
import LightSpeed from 'react-reveal/LightSpeed';

const About = () => {
    return (
        <div id="about" className="about__container">
            <Fade top>
                <h1 className="text-center about__heading"><span style={{ color: 'orange' }}>About</span> me</h1>
            </Fade>
            <div className="about__main mt-5 row">
                <div className="col-md-6 px-5">
                    <Slide left>
                        <h1>MD. ABU RAIHAN</h1>
                    </Slide>
                    <Slide right>
                        <h4>
                            <Typed
                                strings={['A full stack developer', 'A mearn stack developer']}
                                typeSpeed={80}
                                backSpeed={50}
                                loop
                            />
                        </h4>
                    </Slide>
                    <LightSpeed left>
                        <p className="text-secondary mt-5">
                            Hi, I am a abu raihan. I am studying Bsc Computer in Jatiya Kabi Kazi Nazrul Islam University. I'm an expert in Full Stack Web Development, Web Designing, MERN stack and Graphics Designing.
                        </p>
                    </LightSpeed>
                </div>
                <div className="col-md-6">
                    <div className="img__container">
                        <Slide right>
                            <img src={aboutimg} alt=""></img>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;