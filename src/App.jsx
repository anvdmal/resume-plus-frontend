import './App.css'
import ResumeForm from './components/form/ResumeForm.jsx';
import React from "react";
import ResumeRenderer from "./components/templates/ResumeRenderer.jsx";
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
