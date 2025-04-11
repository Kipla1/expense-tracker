import React, { useEffect, useState } from 'react';
import './App.css';
import Searchbar from './Searchbar';
import InputArea from './InputArea';

const Table = () => {
  const [myExpenses, setMyExpenses] = useState([]);

  useEffect(() => {
    fetch('https://expense-tracker-json-server.vercel.app/myExpenses')
      .then((response) => response.json())
      .then((data) => setMyExpenses(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleAddExpense = (newExpense) => {
    setMyExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <div className="table-container">
      <InputArea onAddExpense={handleAddExpense} />
      <Searchbar />
      <table className="table">
        <thead>
          <tr className="table-head">
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className="data">
          {myExpenses.length === 0 ? (
            <tr className="empty">
              <td colSpan="5">No expenses found</td>
            </tr>
          ) : (
            myExpenses.map((item, index) => (
              <tr key={index}>
                <td>{item.expense}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.price.toLocaleString()}</td>
                <td>{item.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
