import React from 'react';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import Skeleton from './PizzaBlock/Skeleton';
import { useSelector } from 'react-redux';

const PizzaList = ({ pizzaItems, pizzaIsLoading }) => {
   const { searching } = useSelector(state => state.selection)
   return (
      <>

         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {pizzaIsLoading
               ? [...new Array(6)].map((p, i) => <Skeleton key={i} />)
               : pizzaItems.map(p => <PizzaBlock key={p.id} {...p} />)
               //: pizzaItems.filter((obj) => obj.title.toLowerCase().includes(searching.toLowerCase())).map(p => <PizzaBlock key={p.id} {...p} />)
            }
         </div>
      </>
   );
}

export default PizzaList;
