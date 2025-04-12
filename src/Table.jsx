import React, { useEffect, useState } from 'react';
import './App.css';
import Searchbar from './Searchbar';

const Table = () => {
  const [myExpenses, setMyExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchExpenses = () => {
    setIsLoading(true);
    fetch('https://expense-tracker-json-server.vercel.app/myExpenses')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMyExpenses(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  if (isLoading) return <div>Loading expenses...</div>;
  if (error) return <div>Error loading expenses: {error}</div>;

  return (
    <div className="table-container">
      <Searchbar />
      <table className="table">
        <thead>
          <tr className="table-head">
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className="data">
          {myExpenses.length > 0 ? (
            myExpenses.map((item, index) => (
              <tr key={index}>
                <td>{item.expense}</td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{item.amount}</td>
                <td>{item.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>No expenses found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;