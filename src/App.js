import React, { Component } from "react";
import "./App.css";
import Result from "./Result/Result"

class App extends Component {
    state = {
        submissions: []
    }

    submissionHandler = submission => {
        //submission will be value of editor
        console.log("Submission: " + submission);
        //use splice array method
        //set submission key to some calc involving student id, name, and the submission number (think hashCode())
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
