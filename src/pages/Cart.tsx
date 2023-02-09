import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NotEmptyCart from '../components/Cart/NotEmptyCart/NotEmptyCart';
import EmptyCart from '../components/Cart/EmptyCart/EmptyCart';
import { useAppSelector } from '../hooks/hooks';
const Cart: React.FC = () => {
   const { cartPizzas } = useAppSelector((state) => state.cart)

   return (
      <>
         {cartPizzas.length > 0 ? <NotEmptyCart /> : <EmptyCart />}
      </>
   );
}

export default Cart;
