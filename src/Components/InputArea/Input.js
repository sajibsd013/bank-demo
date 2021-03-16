import React, { useState } from 'react';
import "../InputArea/Input.css";

const Input = (props) => {
    const {type,handle,Placeholder}= props.info;

    const [amount, setAmount] = useState(0);
    return (
    <div className="inputArea">
      <h2>{type}: </h2>
      <p><input className='input' placeholder={Placeholder} onChange ={(event)=> {setAmount(Number(event.target.value))}} type="text"/></p>
      <button id='amount' onClick={(event)=> handle(amount)}  className='btn'>{type}</button>
    </div>
    );
};
export default Input;