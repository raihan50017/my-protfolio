import React from 'react';
import Particles from 'react-particles-js';
import './Banner.css';
import raihan from './images/raihan.jpg';
import Typed from 'react-typed';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const Banner = () => {
    return (
        <div id="home" className="banner__container">
            <Particles height="600px" className="main__banner"
                params={{
                    "particles": {
                        "number": {
                            "value": 80
                        },
                        "size": {
                            "value": 4
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
            <div className="banner__content">
                <div>
                    <img height="90" width="90" className="rounded-circle" src={raihan} alt=""></img>
                </div>
                <div className="banner__info">
                    <h1>
                        <span style={{ color: 'orange' }}>Hi There i am </span>
                        <Typed
                            strings={['Abu Raihan']}
                            typeSpeed={80}
                            backSpeed={80}
                            loop
                        />
                    </h1>
                </div>
                <div className="banner__title">
                    <p>A full stack web developer</p>
                </div>
                <div className="social__links">
                    <a href="https://github.com/raihan50017" target="blank"><GitHubIcon></GitHubIcon></a>
                    <a href="https://www.linkedin.com/in/programmer-raihan/" target="blank"><LinkedInIcon></LinkedInIcon></a>
                    <a href="https://twitter.com/pro_aburaihan" target="blank"><TwitterIcon></TwitterIcon></a>
                    <a href="https://www.facebook.com/programmer.abu.raihan/" target="blank"><FacebookIcon></FacebookIcon></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;