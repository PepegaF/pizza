import React from 'react';
import { NavLink } from 'react-router-dom';
import EmptyCartImg from '../../../assets/img/empty-cart.png'

const EmptyCart = () => {
   return (
      <div>
         <div className="cart cart--empty">
            <h2>Корзина пустая <span>😕</span></h2>
            <p>Вероятней всего, вы не заказывали ещё пиццу.
               <br />
               Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={EmptyCartImg} alt="Empty cart" />
            <NavLink to={'../home'} className="button button--black" ><span>Вернуться назад</span></NavLink></div>
      </div>
   );
}

export default EmptyCart;
