import React from 'react'
import { observer } from 'mobx-react'
import { Table, Button } from 'react-bootstrap'
import state from '../state'

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
            <tr>
                <td>{category}</td>
                <td>{item}</td>
                <td>{amount}</td>
                <td>{date}</td>
                <td>
                    <Button onClick={() => this.handleEdit(expenseItem)}> Edit </Button>
                </td>
            </tr>
        )
    }
    render() {
        const expenseDetailList = state.expenseDetails.map(this.renderExpenseDetails)
        return (
            <Table responsive>
                <thead>
                    <tr>
                    <th>Category</th>
                    <th>Item</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {expenseDetailList}
                </tbody>
            </Table>
        )
    }
}

const ExpenseDetailView = observer(ExpenseDetailTableView)

export default ExpenseDetailView
export { ExpenseDetailView }