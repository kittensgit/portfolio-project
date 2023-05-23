import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

export default function Progect({ title, img, index }) {
    return (
        <NavLink to={`/project/${index}`}>
            <li className="project">
                <img src={img} alt={title} className="project__img" />
                <h3 className="project__title">{title}</h3>
            </li>
        </NavLink>
    )
}
