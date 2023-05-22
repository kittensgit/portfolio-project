import React from 'react'

import githubIcon from "./gitHub-black.svg"

export default function BtnGitHub({link}) {
    return (
        <a href={link} rel='noreferrer' target='_blank' className="btn-outline">
            <img src={githubIcon} alt="" />
            GitHub repo
        </a>
    )
}
