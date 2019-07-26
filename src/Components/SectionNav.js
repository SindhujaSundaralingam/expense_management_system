import React from 'react'
import Card from 'react-bootstrap/Card'
import { ListGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

class SectionNav extends React.PureComponent {
    static defaultProps = {
        menuList: [ 
            {name: 'Home', url: '/'},
            {name: 'Settings', url: '/settings'},
            {name: 'Profile', url: '/'}],
      }
    
    renderMenuList = (menu) => {
        const { name, url } = menu
        return (
            <ListGroup.Item>
                <NavLink to={url} className='menu-tab'>
                    <div> {name} </div>
                </NavLink>
            </ListGroup.Item>
        )
    }
    render() {
        const { menuList } = this.props
        return (
            <aside className="menuaside">
                <Card className="menulist">
                    <ListGroup>
                        {menuList.map(this.renderMenuList)}
                    </ListGroup>
                </Card>
            </aside>
        )
    }
}

export default SectionNav
export { SectionNav}