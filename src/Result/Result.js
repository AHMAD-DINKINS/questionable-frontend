import React from "react";
import "./Result.css";
import Submission from "./Submission/Submission";

const Result = props => {
    let submissions = props.submissions.length > 0 ?
        <div>
            props.submissions.map(submissionInstance => <Submission submission={submissionInstance}/>)
        </div> : <h3>No Submissions Made</h3>;
    return (
        <div className="Result">
            {submissions}
        </div>
    );
};

export default Result;
