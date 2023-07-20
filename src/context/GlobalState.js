import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer';

//Initial State
const initialState = {
    transactions: [],
    user: null
};

//Create Context
export const GlobalContext = createContext(initialState)

//Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    //Actions
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction,
        });
    }

    function setUser(uid){
        dispatch({
            type: "SET_USER",
            payload: uid
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            user: state.user,
            setUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}