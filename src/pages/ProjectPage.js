import React from 'react'
import { useParams } from 'react-router-dom'
//@ts-ignore
import BtnGitHub from '../components/btnGitHub/BtnGitHub'
import { projects } from '../helpers/ProjectList'

export default function ProjectPage() {

  const { id } = useParams()

  const project = projects[id]

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">

          <h1 className="title-1">{project.title}</h1>

          <img src={project.imgBig} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          <BtnGitHub link='https://github.com' />
        </div>
      </div>
    </main>
  )
}
