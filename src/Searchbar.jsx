import React, { useState } from 'react';

function Searchbar({ onSearchChange }) {
  const [searchValue, setSearchValue] = useState('');
  
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    
    // Pass search term to parent component
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        className="search" 
        placeholder="Search for expenses..." 
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default Searchbar;