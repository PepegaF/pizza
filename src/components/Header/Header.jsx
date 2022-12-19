import React from 'react';
import { NavLink } from 'react-router-dom';
import pizzaLogo from '../../assets/img/pizza-logo.svg'
import CartBtn from './CartBtn/CartBtn';
import PizzaSearch from './PizzaSearch/PizzaSearch';
const Header = () => {
   return (
      <div className="header">
         <div className="container">
            <NavLink to={'./'}>
               <div className="header__logo">
                  <img width="38" src={pizzaLogo} alt="Pizza logo" />
                  <div>
                     <h1 >React Pizza</h1>
                     <p>самая вкусная пицца во вселенной</p>
                  </div>
               </div>
            </NavLink>
            <PizzaSearch />
            <NavLink to={'/cart'}>
               <CartBtn />
            </NavLink>
         </div>
      </div>
   )
}

export default Header;
