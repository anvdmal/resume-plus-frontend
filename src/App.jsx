import './App.css'
import ResumeForm from './resume-form/ResumeForm';
import React from "react";
import ResumeRenderer from "./components/ResumeRenderer";
import {demoResumeData} from "./data/demoResumeData";

function App() {
  return <>
      <ResumeForm />
      <div className="App">
          <ResumeRenderer data={demoResumeData} template="modern"/>
      </div>
  </>;

}

export default App
