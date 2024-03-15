import React, { useEffect, useState } from 'react'
import { useExpenseContext } from '../utils/expenseContext.jsx'


export const ExpenseList = () => {
    const [state, dispatch] = useExpenseContext()
    const [totalExpenses, setTotalExpenses] = useState(0)
    const [viewMode, setViewMode] = useState('table')

    const toggleViewMode = () => {
        setViewMode(viewMode === 'table' ? 'cards' : 'table')
    }

    //Calculer le total des catégories
    const getTotalByCategory = (category) => {
        return state.expenses.reduce((total, expense) => {
            return expense.category === category ? total + parseFloat(expense.amount) : total
        }, 0).toFixed(2)
    }

    useEffect(() => {

        // Calculer le total des dépenses
        const total = state.expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0)
        setTotalExpenses(total)

    }, [state.expenses])

    return (
        <div>
            <h2>Liste des Dépenses</h2>
            <div>
                <h3>Total des dépenses : {totalExpenses} €</h3>
            </div>
            <button onClick={toggleViewMode}>
                {viewMode === 'table' ? 'Afficher les cartes' : 'Afficher le tableau'}
            </button>
            {viewMode === 'table' ? (
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Montant</th>
                            <th>Catégorie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.expenses.map((expense, index) => (
                            <tr key={index}>
                                <td>{expense.date}</td>
                                <td>{expense.amount} €</td>
                                <td>{expense.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>
                    {Object.keys(state.expenses.reduce((acc, expense) => {
                        acc[expense.category] = true
                        return acc
                    }, {})).map((category, index) => (
                        <div key={index}>
                            <h3>{category}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Montant</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {state.expenses
                                        .filter(expense => expense.category === category)
                                        .map((expense, index) => (
                                            <tr key={index}>
                                                <td>{expense.date}</td>
                                                <td>{expense.amount} €</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                            <p>Total: {getTotalByCategory(category)} €</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}