import React,{useReducer,createContext} from "react";
import axios from 'axios'
import contextReducer from './contextReducer'


const initialState ={
    transactions:[],
    error: null,
    loading: true
}

export const ExpenseTrackerContext=createContext(initialState)

export const Provider =({children})=>{
    const [state , dispatch] = useReducer(contextReducer, initialState)
    //Action creators 


    async function  getTransactions(){
        try {
            const res = await axios.get('http://localhost:5000/api/v1/transactions')
            dispatch({
                type:'GET_TRANSACTIONS',
                payload:res.data.data
            })
           
        } catch (err) {
            dispatch({
                type:'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
            
        }
       
    }
    
    const deleteTransaction= async (id)=>{
        try {
            await axios.delete(`http://localhost:5000/api/v1/transactions/${id}`)
            dispatch({
                type:'DELETE_TRANSACTION',
                payload:id
            })
        } catch (err) {
            dispatch({
                type:'TRANSACTION_ERROR',
                payload:err.response.data.error
            })
            
        }
        
    }

    const addTransaction= async (transaction)=>{
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            const res= await axios.post('http://localhost:5000/api/v1/transactions',transaction,config)
            dispatch({
                type:'ADD_TRANSACTION',
                payload:res.data.data})
        } catch (err) {
            dispatch({
                type:'TRANSACTION_ERROR',
                payload:err.response.data.error
            })
        }
    }
    const balance = state.transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);
return (
    <ExpenseTrackerContext.Provider value ={{
        deleteTransaction,
        addTransaction,
        transactions:state.transactions,
        error: state.error,
        loading: state.loading,
        balance,
        getTransactions,
        
    }}>
        {children}
    </ExpenseTrackerContext.Provider>
)
}


