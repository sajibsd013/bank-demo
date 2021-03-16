import React from 'react';
import '../OutputArea/Output.css';

const Output = (props) => {
    return (
        <div style={props.info.style} className="Card">
             <h2>{props.info.type}</h2>
             <h1>$ {props.info.amount}</h1>
        </div>
    );
};

export default Output;