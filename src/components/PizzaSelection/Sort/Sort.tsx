import React from 'react';
import { useState, useRef } from 'react';
import { setSortType } from '../../../redux/pizzaSelectionReducer';
import { useEffect } from 'react';
import s from './Sort.module.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';



const Sort: React.FC = () => {
   const dispatch = useAppDispatch()
   const { sortType } = useAppSelector(state => state.selection)
   const sortArr: string[] = ['популярности', 'цене', 'алфавиту']
   const sortArrBack: string[] = ['rating', 'price', 'title']
   const [open, setOpen] = useState(false);
   const [activeIndex, setActiveIndex] = useState(0);
   const sortRef = useRef<HTMLDivElement>(null)
   const changeSort = (i: number) => {
      setActiveIndex(i)
      dispatch(setSortType(sortArrBack[i]))
      setOpen(false)
   }

   useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
         if (sortRef.current && !e.composedPath().includes(sortRef.current)) setOpen(false)
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
         <div className={s.sortLabel}>
            <b>Сортировка:</b>
            <span onClick={() => setOpen(!open)}>{sortArr[activeIndex]}</span>
         </div>
         {open &&
            <div className={s.sortPopup}>
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
