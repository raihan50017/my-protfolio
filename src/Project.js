import React from 'react';
import './Project.css';
import airbnb from './images/airbnb.JPG';
import chatapp from './images/chatapp.JPG';
import covidtracker from './images/covidtracker.JPG';
import creativeagency from './images/creativeagency.JPG';
import netflix from './images/netflix.JPG';
import travelguru from './images/travelguru.JPG';
import volunteernetwork from './images/volunteernetwork.JPG';
import { Card } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import Button from '@material-ui/core/Button';

const Project = (props) => {
    const img = { airbnb, chatapp, covidtracker, creativeagency, netflix, travelguru, volunteernetwork }
    const project = props.project;
    console.log(project.imgName)
    return (
        <Zoom>
            <Card className="mb-4 card__container">
                <a target="blank" href={project.liveSite}> <Card.Img variant="top" src={img[project.imgName]} /></a>
                <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <div className="card__button">
                        <a style={{ textDecoration: 'none' }} target="blank" href={project.liveSite}><Button variant="contained">Live link</Button></a>
                        <a style={{ textDecoration: 'none' }} target="blank" href={project.gitHub}><Button variant="contained">GitHub code</Button></a>
                    </div>
                </Card.Footer>
                <Button variant="contained" color="secondary" className="project__details__button">View details</Button>
            </Card>
        </Zoom>
    );
};

export default Project;