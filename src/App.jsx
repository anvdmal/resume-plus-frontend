import React, { useState } from 'react';
import ButtonComponent from './Secondary-buttons/SecondaryButton';
import ToggleButton from './Secondary-buttons/SecondaryToggleButton';
import Button from './Tags/ButtonTag';

const App = () => {
  const [selected, setSelected] = useState(null);

  const handleToggleClick = (id) => {
    setSelected(id); 
  };

 

  return (
    <div style={{ padding: '20px' }}>
      



      <h2 style={{ marginTop: '40px' }}>Testing Secondary Toggle Buttons</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <ToggleButton
          isActive={selected === 1}
          onClick={() => handleToggleClick(1)}
        />
        <ToggleButton
          isActive={selected === 2}
          onClick={() => handleToggleClick(2)}
        />
      </div>


      <h2>Testing Secondary Button</h2>
      <ButtonComponent/>

      <h2>Button Tag Test</h2>
      <Button />

      
    </div>
  );
};

export default App;