import React from 'react'
import { Button, Card, Container, ListGroup, Row, Col } from 'react-bootstrap'
import { observer } from 'mobx-react'
import state from '../state'

class CategoryListView extends React.Component {
    handleDelete = category => {
       state.categoryList = state.categoryList.filter(item => {
           return item !== category
       })
    }
    renderCategoryList = category => {
        return (
            <ListGroup.Item>
                <Container>
                    <Row>
                        <Col>
                            <span>{category}</span>
                        </Col>
                        <Col>
                            <Button onClick={() => {
                                this.handleDelete(category)
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
                <Card>
                    <Card.Header>Category List</Card.Header>
                    <ListGroup>
                        {categoryList}
                    </ListGroup>
                </Card>
            </Container>
        )
    }
}

const CategoryList = observer(CategoryListView)

export default CategoryList
export { CategoryList }