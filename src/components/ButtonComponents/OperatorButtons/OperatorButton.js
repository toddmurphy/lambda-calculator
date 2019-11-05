import React from 'react';

const OperatorButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div>
        <span>{props.operator.char}</span>
      </div>
    </>
  );
};

export default OperatorButton;
