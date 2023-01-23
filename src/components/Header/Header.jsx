import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import pizzaLogo from '../../assets/img/pizza-logo.svg'
import CartBtn from './CartBtn/CartBtn';
import PizzaSearch from './PizzaSearch/PizzaSearch';
import s from './Header.module.scss'
const Header = () => {
   const location = useLocation()
   return (
      <div className={s.header}>
         <div className={`${s.container} ${'container'}`}>
            <NavLink to={'./home'}>
               <div className={s.headerLogo}>
                  <img width="38" src={pizzaLogo} alt="Pizza logo" />
                  <div>
                     <h1 >React Pizza</h1>
                     <p>самая вкусная пицца во вселенной</p>
                  </div>
               </div>
            </NavLink>
            {location.pathname === '/home' && < PizzaSearch />}
            <NavLink to={'/cart'}>
               <CartBtn />
            </NavLink>
         </div>
      </div>
   )
}

export default Header;
