import React from 'react'
import Container from 'react-bootstrap/Container'
import { AddCategoryForm, UpdateBudgetForm, CategoryList } from '../../Components'

class SettingsPage extends React.PureComponent {
    render () {
        return (
            <Container>
                <UpdateBudgetForm />
                <AddCategoryForm />
                <CategoryList />
            </Container>
        )
    }
}

export default SettingsPage;
export { SettingsPage }