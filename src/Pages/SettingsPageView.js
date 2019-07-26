import React from 'react'
import { observer } from 'mobx-react'
import Container from 'react-bootstrap/Container'
import { AddCategoryForm, UpdateBudgetForm, CategoryList } from '../Components'
import state from '../state';

class SettingsPageView extends React.PureComponent {
    render () {
        return (
            <Container>
                <UpdateBudgetForm />
                <AddCategoryForm />
                {state.categoryList.length > 0 && <CategoryList />}
            </Container>
        )
    }
}

const SettingsPage = observer(SettingsPageView)

export default SettingsPage;
export { SettingsPage }