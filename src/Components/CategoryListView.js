import React from 'react'
import { Card, Container, ListGroup, Row, Col } from 'react-bootstrap'
import { observer } from 'mobx-react'
import state from '../state'
import { DeleteIcon } from '../icons'
import { DeleteModalView } from './DeleteModalView'

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
                        <Col className="col-6">
                            <span>{category}</span>
                        </Col>
                        <Col className="col-6">
                            <div className="delete-icon" onClick={() => {
                                this.toggleDeleteModal(category)
                            }}><DeleteIcon /></div>
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
                <DeleteModalView show={state.isDeleteModalVisibile} onHide={this.toggleDeleteModal} onDelete={this.handleDelete} />
            </Container>
        )
    }
}

const CategoryList = observer(CategoryListView)

export default CategoryList
export { CategoryList }