import React from 'react';

const SpecialButton = props => {
  return (
    //pass props to output button
    <div>
      <span className="special-buttons">{props.character}</span>
    </div>
  );
};

export default SpecialButton;
