import React, { Component } from 'react';
import styles from './AppFoot.module.css';
import Result from '../Result/Result.jsx';

class AppFoot extends Component {
    state = {
        //Dummy data
        submissions: [
            {
                "id": "5c9768f4016b91dc6d630acf",
                "number": 2,
                "name": "Lee Oneil",
                "email": "leeoneil@cinesanct.com",
                "code": "Hello, Lee Oneil! You have 3 unread messages.",
                "result": "pass"
            },
            {
                "id": "5c9768f4c28a0313021ca85f",
                "number": 1,
                "name": "Colon Hammond",
                "email": "colonhammond@cinesanct.com",
                "code": "Hello, Colon Hammond! You have 5 unread messages.",
                "result": "fail"
            },
            {
              "id": "5c9768f45cbf82990de45303",
              "number": 0,
              "name": "Nielsen Moody",
              "email": "nielsenmoody@cinesanct.com",
              "code": "Hello, Nielsen Moody! You have 6 unread messages.",
              "result": "fail"
            }
          ]
    }

    //test to see if you can output value of editor
    //pass this func as ref to button onClick
    //doc.getEbyId or querySelector ???
    /*submissionHandler = submission => {
        //submission will be value of editor
        //query server for submission result
        console.log(submission);
        //use slice array method
        const submissions = this.state.submissions.slice();
        //update app state
    }*/

    render = () => (
        <div className={styles.App_Foot}>
            <Result submissions={this.state.submissions}/>
        </div>
    );
}

export default AppFoot;
