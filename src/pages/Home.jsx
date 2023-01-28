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

const Home = () => {
   const location = useLocation().search
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { sortType, categoriesType, searching } = useSelector(state => state.selection)
   const { currentPage, perPage, totalCount, pizzaItems, isLoading } = useSelector(state => state.pagination)
   const totalPages = Math.ceil(totalCount / perPage)
   const fetchPizzas = (sortType, categoriesType, searching, currentPage) => {
      const category = categoriesType > 0 ? `category=${categoriesType}` : ''
      const search = searching ? `search=${searching}` : ''
      const pagination = `page=${currentPage}&limit=${perPage}`
      const sort = `sortBy=${sortType}`
      dispatch(getPizzaItems({ sort, category, search, pagination }))
   }
   const { ref, inView } = useInView({
      threshold: 0.5
   })
   useEffect(() => {
      if (inView === true && currentPage < totalPages) {

         console.log(2);
         dispatch(changeCurrentPage())
         fetchPizzas(sortType, categoriesType, searching, currentPage)
      }
   }, [currentPage, inView]);

   useEffect(() => {
      if (location) {
         const url = qs.parse(location.substring(1))
         dispatch(setSelection(url))
         dispatch(setCurrentPage(Number(url.currentPage)))
         fetchPizzas(...Object.values(url))
      } else fetchPizzas(sortType, categoriesType, searching, currentPage)
   }, [location]);

   useEffect(() => {
      const queryString = qs.stringify({
         sortType,
         categoriesType,
         searching,
         currentPage
      })
      navigate(`?${queryString}`)
   }, [sortType, categoriesType, searching, currentPage]);


   useEffect(() => {
      window.scrollTo(0, 0)
   }, []);

   return (
      <div className="container">
         <PizzaSelection />
         <PizzaList pizzaItems={pizzaItems} isLoading={isLoading} />
         <div ref={ref} className='lastElement'></div>
         {/* <Pagination /> */}
      </div>
   );
}

export default Home;
