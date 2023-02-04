import { useState, useEffect, useCallback } from 'react';
import React from 'react';
import { setCategoriesType } from '../../../redux/pizzaSelectionReducer';
import s from './Categories.module.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';

const Categories: React.FC = () => {
   const dispatch = useAppDispatch()
   const { categoriesType } = useAppSelector(state => state.selection)
   const listOfCategories: string[] = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
   const [activeIndex, setActiveIndex] = useState(0);
   const changeCategories = useCallback(
      (i: number) => {
         setActiveIndex(i)
         dispatch(setCategoriesType(i))
      }, []
   )

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
