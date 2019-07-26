import React from 'react'
import { observer } from 'mobx-react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { ModalPopUp, ExpenseDetailView, PaginationView } from '../Components'
import state from '../state'

const toggleModalPopup = () => {
    state.isModalVisible = !state.isModalVisible
    state.isAddExpenseForm = true
    state.initialExpense = {}
}

class HomePageView extends React.PureComponent {
    render () {
        return (
            <Container>
                <Row>
                </Row>
                <Row>
                    <Col className="mt-5 mb-5">
                        <Button onClick={toggleModalPopup}> Add Expense </Button>
                        <ModalPopUp show={state.isModalVisible} onHide={toggleModalPopup}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {state.expenseDetails.length > 0 && <ExpenseDetailView />}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {state.expenseDetails.length > 5 && <PaginationView />}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const HomePage = observer(HomePageView)

export default HomePage;
export { HomePage }