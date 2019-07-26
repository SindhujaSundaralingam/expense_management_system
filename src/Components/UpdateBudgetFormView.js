import React from 'react'
import { observer } from 'mobx-react'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import { Formik } from 'formik'
import state from '../state'
import './style.css'

class UpdateBudgetFormView extends React.Component { 
    handleSubmit = (formData) => {
        const { totalBudget } = formData
        state.totalBudget = totalBudget
    }
    render() {
        return (
            <Card className="budgetcard">
                <Card.Body>
                    <Formik onSubmit={this.handleSubmit}>
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                      }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} controlId="totalBudget">
                            <Form.Label column className="col-md-3">Total Budget</Form.Label>
                            <Col className="col-md-3">
                                <Form.Control type="number" name="totalBudget" value={values.totalBudget} onChange={handleChange} />
                            </Col>
                            <Col className="col-md-3">
                                <Button className="updatebutton" variant="primary" type="submit">
                                    Update
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

const UpdateBudgetForm = observer(UpdateBudgetFormView)

export default UpdateBudgetForm
export { UpdateBudgetForm }