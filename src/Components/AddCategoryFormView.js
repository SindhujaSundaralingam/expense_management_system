import React from 'react'
import { observer } from 'mobx-react'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import { Formik } from 'formik'
import state from '../state'
import { addCategorySchema } from './schema'

class AddCategoryFormView extends React.Component { 
    handleSubmit = (formData) => {
        const { category } = formData
        const isCategoryAlreadyExist = state.categoryList.some(item => {
            return item.toLowerCase() === category.toLowerCase()
        })
        if(!isCategoryAlreadyExist) {
            state.categoryList.push(category)
        } else {
            alert('Category Already Exists')
        }
    }
    render() {
        return (
            <Card className="categorycard">
                <Card.Body>
                    <Formik onSubmit={this.handleSubmit} validationSchema={addCategorySchema}>
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        errors,
                      }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} controlId="addCategory">
                            <Form.Label column className="col-md-3">Categories</Form.Label>
                            <Col className="col-md-3">
                                <Form.Control type="test" name="category" value={values.category} onChange={handleChange} isInvalid={errors.category} />
                                <Form.Control.Feedback type="invalid">
                                    {errors.category}
                                </Form.Control.Feedback>
                            </Col>
                            <Col className="col-md-3">
                            <Button className="addbutton" variant="primary" type="submit">
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