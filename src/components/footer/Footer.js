import React from 'react'

import './style.css'
import github from './../../img/icons/gitHub.svg'
import vk from './../../img/icons/vk.svg'
import twitter from './../../img/icons/twitter.svg'
import linkedIn from './../../img/icons/linkedIn.svg'
import instagram from './../../img/icons/instagram.svg'

export default function Footer() {
    return (

        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
                        <li className="social__item"><a href="#!"><img src={github} alt="Link" /></a></li>
                    </ul>
                    <div class="copyright">
                        <p>© 2022 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
