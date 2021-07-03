import React from 'react'
import { Menu } from 'semantic-ui-react';

const Gnb = () => {
  const activeItem = 'editorials';
  
  return (
    <div>
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          content='Editorials'
          // onClick={this.handleItemClick}
        />

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          content='Reviews'
          // onClick={this.handleItemClick}
        />

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          content='Upcoming Events'
          // onClick={this.handleItemClick}
        />
      </Menu>
    </div>
  )
}

export default Gnb
