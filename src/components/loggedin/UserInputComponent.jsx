import React, { useState } from 'react';

function UserInputComponent() {
  // Define state to hold the user input
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the input value as the user types
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Event handler to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the user input, such as send it to an API or display it on the page
    alert(`You entered: ${inputValue}`);
    // Clear the input field after submission
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input
            type="text"
            value={inputValue}
            placeholder='Enter your Feedback'
            onChange={handleInputChange}
            className='border-b w-[48vw] mt-[1.55vw] ml-[1vw]'
          />
        
        <div className='flex justify-end'>
            <button type="submit" className='border w-[10vw] h-[2.5vw] mt-[0.5vw] bg-strathmore-blue text-white rounded-[1.5vw]'>
                Submit Feedback
            </button>
        </div>
      </form>
    </div>
  );
}

export default UserInputComponent;
