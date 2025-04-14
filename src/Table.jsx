import React, { useEffect, useState } from 'react';
import './App.css';
import Searchbar from './Searchbar';
import InputArea from './InputArea';

const Table = () => {
  const [myExpenses, setMyExpenses] = useState([]);

  useEffect(() => {
    fetch('https://xp-tracker-zeta.vercel.app/myExpenses')
      .then((response) => response.json())
      .then((data) => setMyExpenses(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="table-container">
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
