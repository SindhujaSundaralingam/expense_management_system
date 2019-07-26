import React from 'react'
import { observer } from 'mobx-react'
import state from '../state'
import { EditIcon } from '../icons'

class ExpenseDetailTableView extends React.Component {

    handleEdit = (expenseItem) => {
        state.isAddExpenseForm = false
        state.isModalVisible = true
        state.initialExpense = expenseItem
    }

    renderExpenseDetails = ( expenseItem, index)=> {
        const { category, item, amount, date } = expenseItem
        expenseItem.index = index
        return (
            <div class="table-data">
                <div className="edit-icon" onClick={() => this.handleEdit(expenseItem)}>
                    <EditIcon />
                </div>
                <span>{category}</span>
                <span>{item}</span>
                <span>{amount}</span>
                <span>{date}</span>
            </div>
        )
    }
    render() {
        const expenseDetailList = state.currentExpenseDetails.map(this.renderExpenseDetails)
        return (
            <div class="table-layout">
                <div class="table-header">
                <div class="table-header-data">
                    <h3>Category</h3>
                    <h3>Item name</h3>
                    <h3>Amount</h3>
                    <h3>Expense date</h3>
                </div>
                </div>
                <div class="table-body">
                    {expenseDetailList}
                </div>
            </div>
        )
    }
}

const ExpenseDetailView = observer(ExpenseDetailTableView)

export default ExpenseDetailView
export { ExpenseDetailView }