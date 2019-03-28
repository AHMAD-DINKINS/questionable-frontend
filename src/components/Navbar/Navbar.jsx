import React from 'react';
import style from './Navbar.module.css';

const Navbar = props => {
    return (
            <div id={'navbar'} className={style.Navbar}>
                <nav>
                    <a href='index.html'>About</a>
                    <a href='index.html'>Services</a>
                    <a href='index.html'>Clients</a>
                    <a href='index.html'>Contacts</a>
                </nav>
            </div>
    );
};

export default Navbar;