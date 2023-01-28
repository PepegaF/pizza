import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearSearching, setSearching } from '../../../redux/pizzaSelectionReducer';
import { useRef } from 'react';
import { useCallback } from 'react';
import s from './PizzaSearch.module.scss';
import debounce from 'lodash.debounce';

const PizzaSearch = () => {
   const inputRef = useRef<HTMLInputElement>(null)
   const dispatch = useDispatch()
   const [search, setSearch] = useState('');
   const [mainSearch, setMainSearch] = useState('');
   const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSearch(e.target.value)
      updateMainSearch(e.target.value)
   }
   const clearSearch = () => {
      dispatch(clearSearching(''))
      setSearch('')
      setMainSearch('')
      inputRef.current?.focus()

   }
   const updateMainSearch = useCallback(
      debounce((str) => {
         setMainSearch(str)
      }, 500),
      [],
   )
   useEffect(() => {
      dispatch(setSearching(mainSearch))
   }, [mainSearch]);
   return (
      <div className={s.root}>
         <input className={s.input} ref={inputRef} type="text" value={search} onChange={(e) => onChangeInput(e)} placeholder='Поиск пиццы...' ></input>
         {search && <svg onClick={clearSearch} className={s.clearInput} height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" /><path d="M0 0h48v48h-48z" fill="none" /></svg>}
      </div>

   );
}

export default PizzaSearch;
