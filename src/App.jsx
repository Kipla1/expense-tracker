import React, { useState } from 'react';
import './App.css';
import Table from './Table';
import SubmissionForm from './SubmissionForm';
import Intro from './Intro';
import Icon from './Icon';
import Searchbar from './Searchbar';

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
  
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredExpenses = expenses.filter(expense => {
    const searchLower = searchTerm.toLowerCase();
    return (
      expense.expense.toLowerCase().includes(searchLower) || 
      expense.description.toLowerCase().includes(searchLower)
    );
  });
  
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

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
          <Searchbar onSearchChange={handleSearchChange} />
          <Table expenses={filteredExpenses} />
        </div>
      </div>
    </div>
  );
};

export default App;
