export default (state, action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id !==action.payload)//filter out the one with that id
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions,action.payload]//remain the existing transaction , add on payload (new transaction)
            }
        default:
            return state;
    }
}