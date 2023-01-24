import React ,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState.js'

export default function AddTransaction() {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit=(e)=>{
      e.preventDefault();
     if(text!='' && amount!=''){
      const newTransaction={
        id: Math.floor(Math.random()*1000000),
        text,
        amount:+amount //convert a string to a number
      }

      addTransaction(newTransaction)
     }
     else(alert("please enter subject and amount!"))
     
    }
  return (
    <div>
     
      <form onSubmit={onSubmit}>
        <div className="form-control">
           <label htmlFor="text">Subject</label>
           <input type="text"  placeholder="Enter subject..." value={text} onChange={(e)=>setText(e.target.value)}></input>
        </div>

        <div className="form-control">
           <label htmlFor="amount">Amount <br/>
           (negative - expense, positive - income)
           </label>
           <input type="number"  placeholder="Enter amount..." value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
        </div>

        <button className="btn">Add</button>
      </form>
    </div>
  )
}
