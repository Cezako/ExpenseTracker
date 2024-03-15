import React, { useState } from 'react'
import { useExpenseContext } from '../utils/expenseContext.jsx'


export const ExpenseForm = () => {
    const [, dispatch] = useExpenseContext()
    const [amount, setAmount] = useState('')

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!amount.trim()) {
            return
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: {
                amount: amount
            }
        })

        setAmount('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="saisir une dépense"
                value={amount}
                onChange={handleAmountChange}
            />
            <button type="submit">Valider</button>
        </form>
    )
}