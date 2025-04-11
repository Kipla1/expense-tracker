import React from 'react'

function InputArea() {
    console.log('inputArea loaded')
    
  return (
    <>
    <div>
          <input
        className="inputArea"
        type="text"
        placeholder="Enter expense"
        required
      />
      <input
        className="inputArea"
        type="text"
        placeholder="Enter expense description"
      />
      <input
        className="inputArea"
        type="text"
        placeholder="Enter Category"
      />
      <input
        className="inputArea"
        type="number"
        placeholder="Enter Amount"
        required
      />
      <input
        className="dateInput"
        type="date"
        required
      />
      <button type="submit" className="submitBtn">
        Submit
      </button>
    </div>
    </>
  )
}

export default InputArea
