import React, { createContext, useContext, useReducer } from 'react'
import expenseReducer, {initialState} from '../reducer/expenseReducer.jsx'


const ExpenseContext = createContext()

export const useExpenseContext = () => {
    return useContext(ExpenseContext)
}

export const ProvideExpenseContext = ({children}) => {
    const [state, dispatch] = useReducer(expenseReducer, initialState)

    return <ExpenseContext.Provider value={[ state, dispatch ]}>
        {children}
    </ExpenseContext.Provider>
}

export default ProvideExpenseContext