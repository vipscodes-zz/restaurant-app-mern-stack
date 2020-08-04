import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    //views
    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="#">
                Logo
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Signin</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );

    // render
    return (
        <header id="header">
            {showNavigation()}
        </header>
    );
};

export default Header;