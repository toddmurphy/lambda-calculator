import React, { useState } from 'react';
import SpecialButton from '../SpecialButtons/SpecialButton';
import { specials } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [characterButtons, setCharacterButtons] = useState(specials);

  return (
    //map 'characterButtons' and output  return 'SpecialButton' buttons.Pass it any props needed by the child component
    characterButtons.map((character, index) => {
      return <SpecialButton key={index} character={character} />;
    })
  );
};

export default Specials;

{
  /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
}
