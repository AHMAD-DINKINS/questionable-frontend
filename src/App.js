import React, { Component } from "react";
import "./App.css";
import Result from "./Result/Result"

class App extends Component {
    state = {
        submissions: []
    }

    submissionHandler = submission => {
        console.log("Submission: " + submission);
        //query server for submission result
        //update app state
    }

    render = () => (
        <div className="App">
            <Result submissions={this.state.submissions}/>
        </div>
    );
}

export default App;
