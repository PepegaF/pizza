import React from 'react';
import Categories from './Categories/Categories';
import Sort from './Sort/Sort';

const PizzaSelection = () => {
   return (
      <div className="content__top">
         <Categories />
         {/* как-то сделать отступ при медиазапросе*/}
         <Sort />
      </div>
   );
}

export default PizzaSelection;
