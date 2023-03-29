import React from 'react';
import Categories from './Categories/Categories';
import Sort from './Sort/Sort';
import s from './PizzaSelection.module.scss'

const PizzaSelection: React.FC = () => {
  return (
    <div className={s.contentTop}>
      <Categories />
      <Sort />
    </div>
  );
}

export default PizzaSelection;
