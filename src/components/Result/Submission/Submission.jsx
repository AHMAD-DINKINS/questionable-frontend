import React from 'react';
import styles from './Submission.module.css';

const Submission = props => (
    <div className={styles.Submission}>
        <p>{`Submission: ${props.submission.number}`}</p>
        <p>{`Code: ${props.submission.code}`}</p>
        <p>{`Result: ${props.submission.result}`}</p>
    </div>
);

export default Submission;
