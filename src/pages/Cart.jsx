import React from 'react';
import { useSelector } from 'react-redux';
import NotEmptyCart from './../components/Cart/NotEmptyCart/NotEmptyCart';
import EmptyCart from '../components/Cart/EmptyCart/EmptyCart';

const Cart = () => {
   const { cartPizzas } = useSelector(state => state.cart)
   return (
      <>
         {cartPizzas.length > 0 ? <NotEmptyCart /> : <EmptyCart />}
      </>
   );
}

export default Cart;
