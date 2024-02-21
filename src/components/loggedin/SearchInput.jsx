import React, { useState } from 'react';
import { searchIcon } from '../../assets';

function SearchInput({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    onSearch(searchTerm); // Invoke the passed in search handler
  };

  return (
    <form onSubmit={handleSubmit} className='border border-strathmore-yellow absolute left-[35vw] top-[1.5vw] w-[29vw] h-[2.2vw] rounded-[0.4vw]'>
      <input
        type="text"
        placeholder="Search for Course"
        value={searchTerm}
        onChange={handleChange}
        className='w-[27vw] h-[2.2vw] bg-transparent rounded-[0.4vw]'
      />
      <button type="submit" className='float-right'>
        <img src={searchIcon} className='h-[1.5vw] absolute right-[0.2vw] top-[0.3vw]'/>
      </button>
    </form>
  );
}

export default SearchInput;
