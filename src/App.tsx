import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/assets/button';
import Input from './components/assets/Input';


function App() {
  
  const [a, setA]= useState(0);
  const [b, setB]= useState(0);
  return ( 
    <div className="App">
      <Button a={a} b={b} text="Add" handleClick={(event, a,b)=> alert(a+"+"+b+"="+(a+b))}/>;
      <Button a={a} b={b} text="Subtract" handleClick={(event, a,b)=> alert(a+"-"+b+"="+(a-b))}/>;
      <Button a={a} b={b} text="Multiply" handleClick={(event, a,b)=> alert(a+"*"+b+"="+(a*b))}/>;
      <Button a={a} b={b} text="Divide" handleClick={(event, a,b)=> alert(a+"/"+b+"="+(a/b))}/>;
      <Input text={a} handleChange={(event)=>{setA(Number(event.currentTarget.value))}}/>
      <Input text={b} handleChange={(event)=>{setB(Number(event.currentTarget.value))}}/>
    </div>
  );
}

export default App;
