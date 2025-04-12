import React from 'react';
import './App.css';
import Table from './Table';
import SubmissionForm from './SubmissionForm';
import Intro from './Intro';
import Icon from './Icon';

const App = () => {
  
  return (
    <div id="root">
      <div className="header-container">
        <Icon />
        <h1 className="head">EXPENSE TRACKER</h1>
      </div>
      <Intro />
      <div className="container">
        <SubmissionForm />
        <div className="table-container">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default App;
