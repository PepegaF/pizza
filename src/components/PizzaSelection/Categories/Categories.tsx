import { useState, useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoriesType } from '../../../redux/pizzaSelectionReducer';
import s from './Categories.module.scss'
import { useAppSelector } from '../../../hooks/hooks';

const Categories: React.FC = () => {
   const dispatch = useDispatch()
   const { categoriesType } = useAppSelector(state => state.selection)
   const listOfCategories: string[] = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
   const [activeIndex, setActiveIndex] = useState(0);
   const changeCategories = (i: number): void => {
      setActiveIndex(i)
      dispatch(setCategoriesType(i))
   }
   useEffect(() => {
      setActiveIndex(Number(categoriesType))
   }, [categoriesType]);
   return (
      <div className={s.categories}>
         <ul className={s.categoriesContainer}>
            {listOfCategories.map((item, index) =>
               <li key={index} className={activeIndex === index ? s.active : ''} onClick={() => changeCategories(index)}>{item}</li>
            )}
         </ul>
      </div>
   )
}

export default Categories;
