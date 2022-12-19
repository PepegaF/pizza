import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoriesType } from '../../../reducers/pizzaSelectionReducer';
// import s from './Categories.module.scss'

const Categories = () => {
   const dispatch = useDispatch()
   const listOfCategories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
   const [activeIndex, setActiveIndex] = useState(0);
   const changeCategories = (i) => {
      setActiveIndex(i)
      dispatch(setCategoriesType(i))
   }

   return (
      <div className="categories">
         <ul className='categories__container'>
            {listOfCategories.map((item, index) =>
               <li key={index} className={activeIndex === index ? 'active' : ''} onClick={() => changeCategories(index)}>{item}</li>
            )}
         </ul>
      </div>
   )
}

export default Categories;
