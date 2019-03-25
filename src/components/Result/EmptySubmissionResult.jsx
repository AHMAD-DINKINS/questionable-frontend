import React from 'react';
import classes from './Submission/Submission.module.css';

const EmptySubmissionResult = props => (
    <div className={classes.Submission}>
        <h3 >No Submissions Made Yet...</h3>
    </div>
);

export default EmptySubmissionResult;