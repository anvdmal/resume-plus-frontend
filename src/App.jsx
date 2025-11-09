import './App.css'
import React from "react";
import ResumeRenderer from "./components/ResumeRenderer";
import {demoResumeData} from "./data/demoResumeData";

function App() {
    return (
        <div className="App">
            <ResumeRenderer data={demoResumeData} template="classic"/>
        </div>
    );
}

export default App;
