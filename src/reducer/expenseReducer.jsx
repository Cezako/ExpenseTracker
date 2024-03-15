import { formatDate } from '../utils/formatDate.jsx'


export const initialState = {
    currCategory: '',
    expenses: [],
}

const expenseReducer = (state, action) => {

    switch (action.type) {

        case 'SET_CATEGORY':
            console.log('new category fixed')
            return {
                ...state,
                currCategory: action.payload
            }

        case 'ADD_EXPENSE':
            const newAmount = action.payload.amount
            console.log(newAmount)
            return {
                ...state,
                expenses: [...state.expenses, {
                    amount: newAmount,
                    category: state.currCategory,
                    date: formatDate(new Date())
                }]
            }

        default:
            return state
    }
}

export default expenseReducer
