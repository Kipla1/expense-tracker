import React from 'react';
import './App.css';

const Table = ({ expenses }) => {
  return (
    <div className="table-container">
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
          {expenses.length === 0 ? (
            <tr className="empty">
              <td colSpan="5">No expenses found</td>
            </tr>
          ) : (
            expenses.map((item, index) => (
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
