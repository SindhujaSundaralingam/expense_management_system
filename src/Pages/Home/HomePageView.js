import React from 'react'
import { observer } from 'mobx-react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { ModalPopUp, ExpenseDetailView } from '../../Components'
import state from '../../state'

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
                    <Col>
                        <Button onClick={toggleModalPopup}> Add Expense </Button>
                        <ModalPopUp show={state.isModalVisible} onHide={toggleModalPopup}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ExpenseDetailView />
                    </Col>
                </Row>
            </Container>
        )
    }
}

const HomePage = observer(HomePageView)

export default HomePage;
export { HomePage }