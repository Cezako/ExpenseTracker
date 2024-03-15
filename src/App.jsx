import React from 'react'
import {ExpenseForm} from './component/ExpenseForm.jsx'
import {CategorySelector} from './component/CategorySelector.jsx'
import {ExpenseList} from './component/ExpenseList.jsx'
import {categories} from './component/categories.js'

function App() {

    return (
        <main>
            <h1>Gestion des Dépenses Personnelles</h1>
            <ExpenseForm />
            <CategorySelector categories={categories} />
            <ExpenseList />
        </main>
    )
}

export default App
