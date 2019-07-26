import React from 'react'
import { observer } from 'mobx-react'
import { Table, Button, Card } from 'react-bootstrap'
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
            <tr className="expensedetailrow" >
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
            <Table responsive="sm" borderless>
                <thead>
                    <tr>
                    <th>Category</th>
                    <th>Item name</th>
                    <th>Amount</th>
                    <th>Expense date</th>
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