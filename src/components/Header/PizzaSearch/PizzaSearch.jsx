import React from 'react';
import { useState } from 'react';
import s from './PizzaSearch.module.scss'
import { useDispatch } from 'react-redux';
import { clearSearching, setSearching } from './../../../reducers/pizzaSelectionReducer';
import { useEffect } from 'react';

const PizzaSearch = () => {
   const dispatch = useDispatch()
   const [search, setSearch] = useState('');
   const clearSearch = () => {
      dispatch(clearSearching())
      setSearch('')
   }
   useEffect(() => {
      dispatch(setSearching(search))
   }, [search]);
   return (
      <div className={s.root}>
         <input className={s.input} type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Поиск пиццы...' ></input>
         {search && <svg onClick={clearSearch} className={s.clearInput} height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" /><path d="M0 0h48v48h-48z" fill="none" /></svg>}
      </div>

   );
}

export default PizzaSearch;
