import React from 'react';
import PizzaBlock from './PizzaBlock/PizzaBlock';

const PizzaList = ({ pizzaItems }) => {
   return (
      <div className="content__items">
         {pizzaItems.map(p =>
            <PizzaBlock key={p.id} {...p} />
         )}
      </div>
   );
}

export default PizzaList;
