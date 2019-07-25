import { observable, decorate } from 'mobx'

class State {
    categoryList = []
    totalBudget = 0
}

decorate(State,{
    categoryList: observable,
    totalBudget: observable
})

const state = new State()

export default state
export { state }