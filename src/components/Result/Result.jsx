import React from 'react';
import styles from './Result.module.css';
import Submission from './Submission/Submission.jsx';

const Result = props => {
    let submissions = props.submissions.length > 0 ?
        <div>
            {/*set submission key to some calc involving student id, name, and the submission number (think hashCode())*/}
            {props.submissions.map(s => <Submission key={s.id} submission={s}/>)}
        </div> : <h3>No Submissions Made</h3>;
    return (
        <div className={styles.Result}>

            {submissions}
        </div>
    );
};

export default Result;
