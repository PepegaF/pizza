import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import NotEmptyCart from '../components/Cart/NotEmptyCart/NotEmptyCart';
import EmptyCart from '../components/Cart/EmptyCart/EmptyCart';
import { useAppSelector } from '../hooks/hooks';
import { useRef } from 'react';
const Cart: React.FC = () => {
   const { cartPizzas } = useAppSelector((state) => state.cart)
   const isMounted = useRef(false)
   useEffect(() => {
      if (isMounted.current) {
         const json = JSON.stringify(cartPizzas)
         localStorage.setItem('cart', json)
      }
      isMounted.current = true
   }, [cartPizzas])

   return (
      <>
         {cartPizzas.length > 0 ? <NotEmptyCart /> : <EmptyCart />}
      </>
   );
}

export default Cart;
