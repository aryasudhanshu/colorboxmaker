import React from 'react';
import './App.css';
import Box from './Box';

function App() {
  return (
    <div>
      <Box height={10} width={20} color="purple" />
      <Box height={20} width={15} color="teal" />
    </div>
  );
}

export default App;
