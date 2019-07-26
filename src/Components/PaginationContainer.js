import React from 'react'
import { observer } from 'mobx-react'
import { Pagination } from 'react-bootstrap'
import state from '../state'

class PaginationContainer extends React.Component {
    handlePaginationEvent = (currentPage) => {
        state.currentPage = currentPage
        const offset = ( currentPage - 1) * 5
        state.currentExpenseDetails = state.expenseDetails.slice(offset, offset + 5)
    }
    renderPaginationItem = () => {
        const paginationLength = Math.ceil(state.expenseDetails.length/5)
        const paginationItemView = []
        for (let index=1; index <= paginationLength; index++) {
            paginationItemView.push(
                <Pagination.Item onClick={() => this.handlePaginationEvent(index)}>{index}</Pagination.Item>
            )
        }
        return paginationItemView
    }
    render() {
        const paginationItemView =  this.renderPaginationItem()
        const lastPage = Math.ceil(state.expenseDetails.length/5)
        const nextPage = state.currentPage === lastPage ? lastPage : state.currentPage+1
        const prevPage = state.currentPage === 1 ? 1 : state.currentPage-1
        return (
            <Pagination>
                <Pagination.First onClick={() => this.handlePaginationEvent(1)}/>
                <Pagination.Prev onClick={() => this.handlePaginationEvent(prevPage)}/>
                {paginationItemView}
                <Pagination.Next onClick={() => this.handlePaginationEvent(nextPage)}/>
                <Pagination.Last onClick={() => this.handlePaginationEvent(lastPage)}/>
            </Pagination>
        )
    }
}

const PaginationView = observer(PaginationContainer)

export default PaginationView
export { PaginationView }