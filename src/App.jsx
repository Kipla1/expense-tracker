import React, { useState } from 'react';
import './App.css';
import Table from './Table';
import SubmissionForm from './SubmissionForm';
import Intro from './Intro';
import Icon from './Icon';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      expense: "Pocha Nyagu",
      category: "Food",
      description: "Chapo and nyama at Mama Mboga",
      price: 180,
      date: "01-04-2025"
    },
    {
      expense: "Chips Kuku",
      category: "Food",
      description: "KFC date night",
      price: 300,
      date: "03-04-2025"
    },
    {
      expense: "Car loan",
      category: "Loan",
      description: "Loan to buy Porsche 911",
      price: 30000000,
      date: "06-04-2025"
    }
  ]);

  return (
    <div id="root">
      <div className="header-container">
        <Icon />
        <h1 className="head">EXPENSE TRACKER</h1>
      </div>
      <Intro />
      <div className="container">
        <SubmissionForm expenses={expenses} setExpenses={setExpenses} />
        <div className="table-container">
          <Table expenses={expenses} />
        </div>
      </div>
    </div>
  );
};

export default App;
