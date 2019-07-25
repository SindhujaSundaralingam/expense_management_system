import React from 'react'
import { observer } from 'mobx-react'
import { Modal, Container, Row, Col, Button } from 'react-bootstrap'
import { AddExpenseForm } from './AddExpenseFormView'

class ModalPopUpView extends React.Component {
    render() {
        const { show, onHide } = this.props
        return (
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Expense
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <AddExpenseForm />
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
}

const ModalPopUp = observer(ModalPopUpView)

export default ModalPopUp
export { ModalPopUp }