import React,{createContext, useReducer,useState} from 'react';
import AppReducer from './AppReducer';
//initial state
//transaction is an object, contains array of objects
const initialState={
    transactions:[
        {id:1, text:'Rental', amount:-2000},
        {id:2, text:'Salary', amount:8000},
        {id:3, text:'Book', amount:-50},
        {id:4, text:'Supermarket', amount:-400},
    ]
}


//create context
export const GlobalContext = createContext(initialState);

//context provider component
//whatever wrapped in rovider is children, destructuring children{children}
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION', //action.type
            payload:id//action.payload, any data we want to send to it
        })
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION', //action.type
            payload:transaction//any data we want to send to it
        })
    }

    return (<GlobalContext.Provider value={{
        transactions:state.transactions, //access the value in transactions
        deleteTransaction, //add in provider so other component can access it
        addTransaction

    }}>
        {children}
    </GlobalContext.Provider>);
}