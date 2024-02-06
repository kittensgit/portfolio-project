import React from 'react';

import Project from '../components/project/Project';
import { projects } from '../helpers/ProjectList';

const Projects = () => {
    return (
        <div>
            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">
                        {projects.map((p, index) => (
                            <Project
                                key={index}
                                title={p.title}
                                img={p.img}
                                index={index}
                            />
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Projects;
