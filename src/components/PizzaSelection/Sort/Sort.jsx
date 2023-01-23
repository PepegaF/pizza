import React from 'react';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortType } from '../../../redux/pizzaSelectionReducer';
import { useEffect } from 'react';
import s from './Sort.module.scss'

const Sort = () => {
   const dispatch = useDispatch()
   const { sortType } = useSelector(state => state.selection)
   const sortArr = ['популярности', 'цене', 'алфавиту']
   const sortArrBack = ['rating', 'price', 'title']
   const [open, setOpen] = useState(false);
   const [activeIndex, setActiveIndex] = useState(0);
   const sortRef = useRef()
   const changeSort = (i) => {
      setActiveIndex(i)
      dispatch(setSortType(sortArrBack[i]))
      setOpen(false)
   }

   useEffect(() => {
      const handleClickOutside = (e) => {
         if (!e.composedPath().includes(sortRef.current)) setOpen(false)
      }
      document.body.addEventListener('click', handleClickOutside)
      return () => {
         document.body.removeEventListener('click', handleClickOutside)
      }
   }, []);

   useEffect(() => {
      setActiveIndex(sortArrBack.indexOf(sortType))
   }, [sortType]);
   return (
      <div ref={sortRef} className={s.sort}>
         <div className={s.sort__label}>
            <svg
               width="10"
               height="6"
               viewBox="0 0 10 6"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                  fill="#2C2C2C"
               />
            </svg>
            <b>Сортировка по:</b>
            <span onClick={() => setOpen(!open)}>{sortArr[activeIndex]}</span>
         </div>
         {open &&
            <div className={s.sort__popup}>
               <ul>
                  {sortArr.map((el, i) =>
                     <li key={i} className={activeIndex === i ? s.active : ''} onClick={() => changeSort(i)}>{el}</li>
                  )}
               </ul>
            </div>
         }
      </div>
   )
}

export default Sort;
