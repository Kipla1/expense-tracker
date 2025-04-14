import React, { useState } from 'react';

const SubmissionForm = ({ expenses, setExpenses }) => {
  const [expense, setExpense] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      expense,
      description,
      category,
      price: parseFloat(price),
      date,
    };

    // Append the new expense to the existing array
    setExpenses([...expenses, newExpense]);

    // Clear the form inputs
    setExpense('');
    setDescription('');
    setCategory('');
    setPrice('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="submission-form">
      <h2>Add Expenses</h2>
      <input
      className='inputArea'
        type="text"
        placeholder="Enter expense"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
      />
      <input
      className='inputArea'
        type="text"
        placeholder="Enter expense description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
      className='inputArea'
        type="text"
        placeholder="Enter category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
      className='inputArea'
        type="number"
        placeholder="Enter amount"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
      className='inputArea'
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit" className='submitBtn'>Submit</button>
    </form>
  );
};

export default SubmissionForm;
