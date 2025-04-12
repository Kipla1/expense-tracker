import React, {useState} from 'react'

function InputArea(){
    console.log('inputArea loaded')
    const [expense, setExpense] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (event) =>{
      event.preventDefault();

      const newExpense ={
        expense: expense,
        description: description,
        category: category,
        amount: parseFloat(amount), // Changed from amount to price to match Table.jsx
        date: date,
      }

      console.log(newExpense)

      fetch('https://expense-tracker-json-server.vercel.app/myExpenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newExpense),
      })
      .then(response => {
        if (!response.ok) { 
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        console.log("Success:", data);
        // Clear the form
        setExpense('');
        setDescription('');
        setCategory('');
        setAmount('');
        setDate('');
        alert("Expense added successfully!");
      })
      .catch(error => {
        console.error('Error adding expense:', error);
        alert("Failed to add expense. Please try again later.")
      })
    }
    
  return (
    <>
    <div>
          <input
        className="inputArea"
        type="text"
        placeholder="Enter expense"
        value={expense}
        onChange={(e)=> setExpense(e.target.value)}
        required
      />
      <input
        className="inputArea"
        type="text"
        placeholder="Enter expense description"
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
      />
      <input
        className="inputArea"
        type="text"
        placeholder="Enter Category"
        value={category}
        onChange={(e)=> setCategory(e.target.value)}
      />
      <input
        className="inputArea"
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e)=> setAmount(e.target.value)}
        required
      />
      <input
        className="dateInput"
        type="date"
        value={date}
        onChange={(e)=> setDate(e.target.value)}
        required
      />
      <button type="submit" className="submitBtn" onClick={handleSubmit}>
        Submit
      </button>
      
    </div>
    </>
  )
}

export default InputArea