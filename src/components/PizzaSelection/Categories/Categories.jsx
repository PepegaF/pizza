import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoriesType } from '../../../redux/pizzaSelectionReducer';
import s from './Categories.module.scss'

const Categories = () => {
   const dispatch = useDispatch()
   const { categoriesType } = useSelector(state => state.selection)
   const listOfCategories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
   const [activeIndex, setActiveIndex] = useState(0);
   const changeCategories = (i) => {
      setActiveIndex(i)
      dispatch(setCategoriesType(i))
   }
   useEffect(() => {
      setActiveIndex(Number(categoriesType))
   }, [categoriesType]);
   return (
      <div className='categories'>
         <ul className={s.categoriesContainer}>
            {listOfCategories.map((item, index) =>
               <li key={index} className={activeIndex === index ? s.active : ''} onClick={() => changeCategories(index)}>{item}</li>
            )}
         </ul>
      </div>
   )
}

export default Categories;
