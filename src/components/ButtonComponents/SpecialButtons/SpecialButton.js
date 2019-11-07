import React from 'react';

const SpecialButton = props => {
  return (
    //pass props to output button

    <button className="special-buttons">{props.character}</button>
  );
};

export default SpecialButton;
