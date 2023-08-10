import React, { useState } from 'react';
import './App.css';
import { SuperButton } from './components/SuperButton';

function App() {

  console.log('app rendered')
  return (
    <div>
      <SuperButton  callBack={()=>{}} color={'red'}>RED</SuperButton>
      <SuperButton  callBack={()=>{}} disabled>DISABLED</SuperButton>
      <br />
      <SuperButton  callBack={()=>{}}  color={'secondary'}>SuperButton1</SuperButton>
    </div>
  );
}

export default App;
