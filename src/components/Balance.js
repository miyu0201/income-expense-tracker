import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState.js'

const Balance = () => {
  const {transactions}= useContext(GlobalContext)
  const amount = transactions.map(transactions =>transactions.amount)
  const initialValue = 0;
  const total=amount.reduce((accumulator, currentValue)=> accumulator + currentValue,initialValue).toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  )
}

export default Balance
