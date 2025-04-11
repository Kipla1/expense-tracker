import React from "react";
import './App.css'
import InputArea from "./InputArea";

function SubmissionForm(){
    return(

        <div className="submission-form">
          <h2>Add expenses</h2>
          <InputArea />
        </div>
    )
}

export default SubmissionForm
