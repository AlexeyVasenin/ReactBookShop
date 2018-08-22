import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';

const CartComponent = ({title, id, image, removeFromCart}) => (
  <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this, id)} color="red">Удалить</Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
      </List.Item>
  </List>
);

const MenuComponents = ({ totalPrice, count, items }) => (
  <Menu className='topmenu'>
  <Menu.Item name='browse' onClick={this.handleItemClick}>
    Магазин Книг
  </Menu.Item>

    <Menu.Menu position='right'>
    <Menu.Item name='signup' onClick={this.handleItemClick}>
        Итого: &nbsp; <b>{totalPrice}</b> &nbsp; руб.
    </Menu.Item>
  
  <Popup
  trigger={
    <Menu.Item name='help' onClick={this.handleItemClick}>
      Корзина ( <b>{count}</b> )
    </Menu.Item>
  }
  content={items.map(book => <CartComponent {...book} />)}
  on="click"
  hideOnScroll
  />
  </Menu.Menu>
</Menu>

);

export default MenuComponents ;