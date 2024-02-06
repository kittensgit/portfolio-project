import React from 'react';
import { useParams } from 'react-router-dom';

import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import { projects } from '../helpers/ProjectList';

const ProjectPage = () => {
    const { id } = useParams();

    const project = projects[id];

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>

                    <a href={project.ghPage} target="_blank" rel="noreferrer">
                        <img
                            src={project.img}
                            alt={project.title}
                            className="project-details__cover"
                        />
                    </a>

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>
                    {project.githubLink && (
                        <BtnGitHub link={project.githubLink} />
                    )}
                </div>
            </div>
        </main>
    );
};

export default ProjectPage;
