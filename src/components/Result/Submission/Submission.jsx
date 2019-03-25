import React from 'react';
import styles from './Submission.module.css';

const Submission = props => {
    if (props.submission.toggled)
        return (
            <div className={styles.Submission}>
                <div onClick={props.toggle} className={styles.Toggled}>
                </div>
            </div>
        );

    return (
        <div className={styles.Submission} onClick={props.toggle}>
            <p>{`Submission: ${props.submission.attempt}`}</p>
            <p>{`Code: ${props.submission.code}`}</p>
            <p>{`Result: ${props.submission.result}`}</p>
        </div>)
};

export default Submission;
