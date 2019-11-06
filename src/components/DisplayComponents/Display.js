import React, { useState } from 'react';

const Display = props => {
  return (
    <div className="display">
      <span>{props.total}</span>
    </div>
  );
};

export default Display;
