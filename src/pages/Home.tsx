import React from 'react';
import { useEffect, useState } from 'react';
import Pagination from '../components/Pagination/Pagination';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { changeCurrentPage, getPizzaItems, setCurrentPage } from '../redux/paginationReducer';
import { setSelection } from '../redux/pizzaSelectionReducer';
import { useInView } from 'react-intersection-observer';
import PizzaSelection from '../components/PizzaSelection/PizzaSelection';
import PizzaList from '../components/PizzaList/PizzaList';
import { useAppSelector } from '../hooks/hooks';
import { useAppDispatch } from './../hooks/hooks';
import { useMemo } from 'react';
import { pizzaSelectionState } from '../redux/types';
import { useRef } from 'react';

const Home: React.FC = () => {
   const isMounted = useRef(false)
   const location = useLocation().search
   const navigate = useNavigate()
   const dispatch = useAppDispatch()
   const { cartPizzas } = useAppSelector((state) => state.cart)
   const { sortType, categoriesType, searching } = useAppSelector(state => state.selection)
   const { currentPage, perPage, totalCount, pizzaItems, isLoading } = useAppSelector(state => state.pagination)
   const totalPages = useMemo(() => Math.ceil(totalCount / perPage), [totalCount, perPage])
   const fetchPizzas = (sortType: string, categoriesType: number, searching: string, currentPage: number | undefined) => {
      const category = categoriesType > 0 ? `category=${categoriesType}` : ''
      const search = searching ? `search=${searching}` : ''
      const pagination = `page=${currentPage}&limit=${perPage}`
      const sort = `sortBy=${sortType}`
      dispatch(getPizzaItems({ sort, category, search, pagination }))
   }

   useEffect(() => {
      if (isMounted.current) {
         const json = JSON.stringify(cartPizzas)
         localStorage.setItem('cart', json)
      }
      isMounted.current = true
   }, [cartPizzas])

   useEffect(() => {
      if (location) {
         const url = qs.parse(location.substring(1)) as unknown as pizzaSelectionState
         dispatch(setSelection(url))
         dispatch(setCurrentPage(Number(currentPage)))
      }
   }, [location]);

   useEffect(() => {
      const queryString = qs.stringify({
         sortType,
         categoriesType,
         searching,
         currentPage
      })
      navigate(`/home?${queryString}`)
      fetchPizzas(sortType, categoriesType, searching, currentPage)
   }, [sortType, categoriesType, searching, currentPage]);


   useEffect(() => {
      window.scrollTo(0, 0)
   }, [currentPage]);

   return (
      <div className="container">
         <PizzaSelection />
         <PizzaList pizzaItems={pizzaItems} isLoading={isLoading} />
         {/* <div ref={ref} className='lastElement'></div> */}
         <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
   );
}

export default Home;
