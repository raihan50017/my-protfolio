import React from 'react';
import './Projects.css';
import Fade from 'react-reveal/Fade';
import projectData from './projectData';
import Project from './Project';
import { CardColumns } from 'react-bootstrap';

const Projects = () => {
    return (
        <div id="projects" className="projects__main">
            <Fade right>
                <h1 className="projects__heading">Projects</h1>
            </Fade>
            <div className="projects__container">
                <CardColumns>
                    {
                        projectData.map(project => <Project key={project.id} project={project}></Project>)
                    }
                </CardColumns>
            </div>
        </div>
    );
};

export default Projects;