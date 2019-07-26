import React from 'react'
import { Modal, Container, Row, Col, Button } from 'react-bootstrap'

class DeleteModalView extends React.Component {
    render() {
        const { show, onHide, onDelete } = this.props
        return (
            <Modal show={show} onHide={onHide}>
                <Modal.Body>
                    <Container>
                        <Row className="m-3">
                        <Col>
                            <span className="col"> Are you sure you want to delete the category? </span>
                        </Col>
                        </Row>
                        <Row>
                        <Col className="delete-modal-buttons">
                            <Button variant="outline-primary" onClick={onDelete} className="mr-3 px-5 deletemodalbutton"> Yes </Button>
                            <Button variant="outline-secondary" onClick={onHide} className="px-5 deletemodalbutton"> No </Button>
                        </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
}

export default DeleteModalView
export { DeleteModalView }