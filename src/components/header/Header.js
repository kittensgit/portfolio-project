import React from 'react';
import './style.css';

function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>
                        Hi, my name is <em>Nika</em>
                    </strong>
                    <br />a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
