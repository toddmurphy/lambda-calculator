import React from 'react';

const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div>
        <span>{props.number}</span>
      </div>
    </>
  );
};

export default NumberButton;
