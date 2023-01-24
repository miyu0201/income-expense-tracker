import React, {useContext}from 'react'
import {GlobalContext} from '../context/GlobalState.js'
import Transaction from './Transaction.js'

const TransactionList = () => {
 const context= useContext(GlobalContext)
 // const {transactions}= useContext(GlobalContext)
 /**<ul className="list">
        {transactions.map(transaction => ( <li className="minus">
            {transaction.text} <span>-$400</span><button className="delete-btn">x</button>
        </li>))}
      </ul> */
  //console.log(Transactions)
  return (
    <div>
      
      <ul className="list">
        {context.transactions.map(transaction => (<Transaction key={transaction.id} transaction= {transaction}/>))}
      </ul>
    </div>
  )
}

export default TransactionList
