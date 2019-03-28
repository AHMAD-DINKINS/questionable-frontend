import React, { Component } from 'react';
import footStyles from './App.module.css';
import Result from '../components/Result/Result.jsx';

export default class AppFoot extends Component {
    state = {
        submissions: []
    }

    submissionHandler = () => {
        //query server for actual submission result
        const submission = {
            id: this.hashCode('student' + Math.floor(Math.random() * 1000000)),
            attempt: this.state.submissions.length,
            name: 'student' + Math.floor(Math.random() * 1000000),
            email: Math.floor(Math.random() * 1000000) + '@example.com',
            code: document.getElementById('editor-input').textContent,
            result: Math.random() > .5 ? 'PASS' : 'FAIL',
            toggled: true
        }

        //update app state
        this.setState({
            submissions: [
                submission,
                ...this.state.submissions
            ]
        });
    }

    toggleSubmissionHandler = submissionIndex => {
        const submission = {
            ...this.state.submissions[submissionIndex]
        };

        submission.toggled = !submission.toggled;

        const submissions = [...this.state.submissions];
        submissions[submissionIndex] = submission;

        this.setState({submissions: submissions})
    };

    hashCode = s => {
        var h = 0, l = s.length, i = 0;
        if ( l > 0 )
          while (i < l)
            h = (h << 5) - h + s.charCodeAt(i++) | 0;
        return h;
    };

    render = () => (
        <div className={footStyles.App_Foot}>
            <Result
            grade={this.submissionHandler}
                submissions={this.state.submissions}
            toggleSubmission={this.toggleSubmissionHandler}
            />
        </div>
    );
}
