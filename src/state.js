import { observable, decorate } from 'mobx'

class State {
    categoryList = []
    totalBudget = 0
    isModalVisible = false
    expenseDetails = []
    initialExpense= {}
    isAddExpenseForm = true
}

decorate(State,{
    categoryList: observable,
    totalBudget: observable,
    isModalVisible: observable,
    expenseDetails: observable,
    initialExpense: observable,
    isAddExpenseForm: observable,
})

const state = new State()

export default state
export { state }