//default import without {}
import React ,{useState} from 'react'
import Header from './components/Header.js'
import Balance from './components/Balance.js'
import TransactionList from './components/TransactionList.js'
import AddTransaction from './components/AddTransaction.js'
//named import using {}
import {IncomeExpenses} from './components/IncomeExpenses.js'
import {GlobalProvider} from './context/GlobalState.js'
import {ToggleContext} from './context/GlobalState.js'
import './App.css';

function App() {
  const [toggle,setToggle]=useState(false)
  const handleToggle=()=>{
    setToggle(!toggle)
  }
  
  const [toggleHistory, setToggleHistory]=useState(false)
  const handleToggleHistory=()=>{
    setToggleHistory(!toggleHistory)
  }

  return (
    <GlobalProvider>
    
    <div>
     <Header/>
     <div className="container">
       <Balance/>
       <IncomeExpenses/>
       <ToggleContext.Provider value={{toggle,setToggle}}>
        <h3>Transcaction History</h3> 
        <button className={toggleHistory===true? 'btn-close':'btn'} onClick={handleToggleHistory}>{toggleHistory===true? 'Close History':'Show'}</button>
        {toggleHistory && <TransactionList/>}
       
        <h3>Add New Transcaction</h3>   
        <button className={toggle===true? 'btn-close':'btn'} onClick={handleToggle}>{toggle===true? 'Cancel Add':'Show'}</button>
        {toggle && <AddTransaction/>}

      </ToggleContext.Provider>
      </div>
    </div>
    
    </GlobalProvider>
  );
}

export default App;
