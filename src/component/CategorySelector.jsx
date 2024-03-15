import React, { useEffect } from 'react'
import { useExpenseContext } from '../utils/expenseContext.jsx'


export const CategorySelector = ({ categories }) => {
    const [, dispatch] = useExpenseContext()

    useEffect(() => {
        dispatch({ type: 'SET_CATEGORY', payload: categories[0] })
    }, [])

    const handleCategoryChange = (e) => {
        dispatch({ type: 'SET_CATEGORY', payload: e.target.value })
    }

    return (
        <select onChange={handleCategoryChange}>
            {categories.map((category, i) => (
                <option key={i} value={category}>{category}</option>
            ))}
        </select>
    )
}