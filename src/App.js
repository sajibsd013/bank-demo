import './App.css';
import { useState } from 'react';
import Output from './Components/OutputArea/Output';
import Input from './Components/InputArea/Input';

function App() {
  

  const [deposit, setDeposit] = useState(0);
  const [Withdraw,setWithdraw] = useState(0);
  const [balance, setBalance] = useState(0);

  
  const handleDeposit = (amount) => {
    if(amount>0){
      setDeposit(deposit+amount);
      setBalance(balance+amount);
    }else if(amount<0){
      alert("Amount can't be negative!");
    }

  };

const handleWithdraw = (amount) => {
    if(balance>=100 && amount>0){
      setWithdraw(Withdraw+amount);
      setBalance(balance-amount);
    }else if(amount<0){
      alert("Amount can't be negative!");
    }else{
      alert("Don't have enough amount");
    }
  };


let divStyle = [ 
    { type: "Deposit", amount: deposit, style: {
                backgroundImage: "linear-gradient(45deg , rgb(94, 79, 196), rgb(94, 78, 198))"
              }
    },
    { type: "Withdraw", amount: Withdraw, style: {
                 backgroundImage: "linear-gradient(45deg , rgb(240, 150,111), rgb(243, 150, 110))"
              }
    },
    { type: "Balance", amount: balance,  style: {
                  backgroundImage: "linear-gradient(45deg ,rgb(239, 155, 2), rgb(239, 155, 1))"
                }
    },
  ];
  
let inputInfo = [
  { type: "Deposit", amount: deposit, handle: handleDeposit, Placeholder:"$ amount you want to Deposit" },
  { type: "Withdraw", amount: Withdraw, handle: handleWithdraw , Placeholder:"$ amount you want to withdraw"},
];


  return (
    <div className='container'>
        <h1 className="styleHead">Transaction Area</h1>
        <div>
            {
              divStyle.map(data => <Output info={data}></Output>)
            }
        </div>
        <div>
          {
            inputInfo.map(data => <Input info={data} > </Input>)
          }
        </div>
        <footer > <small>&copy; 2021 Sajib Sutradhar. All Rights Reserved</small></footer>

    </div>
  );
}


export default App;
