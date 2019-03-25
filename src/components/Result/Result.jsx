import React from 'react';
import styles from './Result.module.css';
import Submission from './Submission/Submission.jsx';
import EmptySubmissionResult from './EmptySubmissionResult.jsx';

const Result = props => {
    let submissions = props.submissions.length > 0 ?
        <div>
            {/*set submission key to some calc involving student id, name, and the submission number (think hashCode())*/}
            {props.submissions.map((submissionInstance, index) =>
                <Submission
                    toggle={() => props.toggleSubmission(index)} //try to replace with bind()
                    key={submissionInstance.id}
                    submission={submissionInstance}
                />)
            }
        </div> : <EmptySubmissionResult/>;
    return (
        <div className={styles.Result}>
            <button id={'button'} onClick={props.grade}>Grade</button>
            {submissions}
        </div>
    );
};

export default Result;
