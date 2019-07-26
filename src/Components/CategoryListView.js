import React from 'react'
import { Button, Card, Container, ListGroup, Modal, Row, Col } from 'react-bootstrap'
import { observer } from 'mobx-react'
import state from '../state'

class CategoryListView extends React.Component {
    handleDelete = () => {
       state.categoryList = state.categoryList.filter(item => {
           return item !== state.category
       })
       this.toggleDeleteModal()
    }
    toggleDeleteModal = (category) => {
        state.category = category
        state.isDeleteModalVisibile = !state.isDeleteModalVisibile
    }

    renderCategoryList = category => {
        return (
            <ListGroup.Item className="categorylistgroupitem">
                <Container>
                    <Row>
                        <Col>
                            <span>{category}</span>
                        </Col>
                        <Col>
                            <Button onClick={() => {
                                this.toggleDeleteModal(category)
                            }}>Delete</Button>
                        </Col>
                    </Row>
                </Container>
            </ListGroup.Item>
        )
    }
    render() {
        const categoryList = state.categoryList.map(this.renderCategoryList)
        return (
            <Container>
                <Card className="categorylistcard">
                    <ListGroup>
                        {categoryList}
                    </ListGroup>
                </Card>
                <Modal show={state.isDeleteModalVisibile} onHide={this.toggleDeleteModal}>
                    <Modal.Body>
                        <Container>
                            <Row className="m-3">
                            <Col>
                                <span className="col"> Are you sure you want to delete the category? </span>
                            </Col>
                            </Row>
                            <Row className="m-3">
                            <Col>
                                <Button variant="outline-primary" onClick={this.handleDelete} className="col deletemodalbutton"> Yes </Button>
                            </Col>
                            <Col>
                                <Button variant="outline-secondary" onClick={this.toggleDeleteModal} className="col deletemodalbutton"> No </Button>
                            </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </Container>
        )
    }
}

const CategoryList = observer(CategoryListView)

export default CategoryList
export { CategoryList }