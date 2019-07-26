import { observable, decorate } from 'mobx'

class State {
    categoryList = []
    totalBudget = 0
    isModalVisible = false
    expenseDetails = []
    initialExpense= {}
    isAddExpenseForm = true
    isDeleteModalVisibile = false
    category = ''
    currentExpenseDetails = []
    currentPage = 1
}

decorate(State,{
    categoryList: observable,
    totalBudget: observable,
    isModalVisible: observable,
    expenseDetails: observable,
    initialExpense: observable,
    isAddExpenseForm: observable,
    isDeleteModalVisibile: observable,
    category: observable,
    currentExpenseDetails: observable,
    currentPage: observable,
})

const state = new State()

export default state
export { state }