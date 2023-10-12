import React from 'react';

import './style.css';
import github from './../../img/icons/gitHub.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import instagram from './../../img/icons/instagram.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="#!">
                                <img src={instagram} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a
                                href="https://www.linkedin.com/in/nika-posh/"
                                target="_blank"
                            >
                                <img src={linkedIn} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a
                                href="https://github.com/kittensgit"
                                target="_blank"
                            >
                                <img src={github} alt="Link" />
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 Nika</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
