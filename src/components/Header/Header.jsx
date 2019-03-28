import React from 'react';
import styles from './Header.module.css';

const Header = props => (
    <div className={styles.Header}>
        <header>
            <h2>{props.title}</h2>
        </header>
    </div>
);

export default Header