import React from 'react'
import { observer } from 'mobx-react'
import { Card, Form, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import state from '../state'
import { addFormSchema } from './schema'

class AddExpenseFormView extends React.Component {

    handleSubmit = (formData) => {
        const {category, item, amount, date} = formData
        if(state.isAddExpenseForm) {
            const details = {
                categoryId: state.expenseDetails.length + 1,
                category,
                item,
                amount,
                date,
            }
            state.expenseDetails.push(details)
        } else {
            const indexValue = state.initialExpense.categoryId - 1
            state.expenseDetails[indexValue].category = category
            state.expenseDetails[indexValue].item = item
            state.expenseDetails[indexValue].amount = amount
            state.expenseDetails[indexValue].date = date
        }
        if(state.expenseDetails.length <= 5) {
            state.currentExpenseDetails = state.expenseDetails
        } else {
            const currentPage = state.currentPage
            const offset = ( currentPage - 1) * 5
            state.currentExpenseDetails = state.expenseDetails.slice(offset, offset + 5)
        }

        state.initialExpense = {}
        state.isModalVisible = false
        state.isAddExpenseForm = true
    }

    renderOptions = (category) => {
        return <option value={category}> {category} </option>
    }

    render() {
        const optionView = state.categoryList.map(this.renderOptions)
        return (
            <Card>
                <Card.Body>
                    <Formik initialValues={state.initialExpense} onSubmit={this.handleSubmit} validationSchema={addFormSchema}>
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        errors,
                        touched,
                      }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="addExpense">
                            <Form.Label column>Categories</Form.Label>
                            <Form.Control as="select" name="category" value={values.category} onChange={handleChange} isInvalid={errors.category}>
                                <option value=''> Select any category</option>
                                {optionView}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.category}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label column>Item Name</Form.Label>
                            <Form.Control type="text" name="item" value={values.item} onChange={handleChange} isInvalid={errors.item} />
                            <Form.Control.Feedback type="invalid">
                                {errors.item}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label column>Amount</Form.Label>
                            <Form.Control type="number" name="amount" value={values.amount} onChange={handleChange} isInvalid={errors.amount} />
                            <Form.Control.Feedback type="invalid">
                                {errors.amount}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label column>Date</Form.Label>
                            <Form.Control type="date" name="date" value={values.date} onChange={handleChange} isInvalid={errors.date} />
                            <Form.Control.Feedback type="invalid">
                                {errors.date}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {state.isAddExpenseForm ? 'Add' : 'Update'}
                        </Button>
                    </Form>)}
                    </Formik>
                </Card.Body>
            </Card>
        )
    }
}

const AddExpenseForm = observer(AddExpenseFormView)

export default AddExpenseForm
export { AddExpenseForm }