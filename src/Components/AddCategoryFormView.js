import React from 'react'
import { observer } from 'mobx-react'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import { Formik } from 'formik'
import state from '../state'

class AddCategoryFormView extends React.Component { 
    handleSubmit = (formData) => {
        const { category } = formData
        const isCategoryAlreadyExist = state.categoryList.some(item => {
            return item === category
        })
        if(!isCategoryAlreadyExist) {
            state.categoryList.push(category)
        } else {
            alert('Category Already Exists')
        }
        
    }
    render() {
        return (
            <Card>
                <Card.Body>
                    <Formik onSubmit={this.handleSubmit}>
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                      }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} controlId="addCategory">
                            <Form.Label column>Categories</Form.Label>
                            <Col>
                                <Form.Control type="test" name="category" value={values.category} onChange={handleChange} />
                            </Col>
                            <Col>
                            <Button variant="primary" type="submit">
                                Add
                            </Button>
                        </Col>
                        </Form.Group>
                    </Form>)}
                    </Formik>
                </Card.Body>
            </Card>
        )
    }
}
const AddCategoryForm = observer(AddCategoryFormView)

export default AddCategoryForm
export { AddCategoryForm }