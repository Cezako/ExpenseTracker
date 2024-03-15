import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import ProvideExpenseContext from "./utils/expenseContext.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ProvideExpenseContext>
      <App />
    </ProvideExpenseContext>
  </React.StrictMode>,
)
