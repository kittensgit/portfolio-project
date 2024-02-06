import React from 'react';

import githubIcon from './gitHub-black.svg';

const BtnGitHub = ({ link }) => {
    return (
        <a href={link} rel="noreferrer" target="_blank" className="btn-outline">
            <img src={githubIcon} alt="" />
            GitHub repo
        </a>
    );
};

export default BtnGitHub;
