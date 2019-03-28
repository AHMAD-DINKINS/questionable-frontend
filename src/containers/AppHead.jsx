import React, { PureComponent } from 'react';
import Header from '../components/Header/Header.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';
import headStyles from './App.module.css';

export default class AppHead extends PureComponent {
    state = {
        navbarVisible: false
    }
    toggleNavbar = () => {
        const navbar = document.getElementById('navbar');
        console.log(navbar);
        const navbarVisible = !this.state.navbarVisible;
        navbar.style.width = navbarVisible ? "250px" : "0";
        this.setState({
            navbarVisible: navbarVisible
        });
    }

    render = () => {
        const buttonStyle = this.props.visible ? headStyles.Close : headStyles.Open;
        return (
            <div className={headStyles.AppHead}>
                <Navbar visible={this.state.navbarVisible}/>
                <Header title={this.props.appTitle}/>
                <button className={buttonStyle} onClick={this.toggleNavbar}>Toggle Navbar</button>
            </div>
        );
    };
}

