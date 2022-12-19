import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PizzaList from './../components/PizzaList/PizzaList';
import PizzaSelection from '../components/PizzaSelection/PizzaSelection';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

const Home = () => {
   const { sortType, categoriesType, searching } = useSelector(state => state.selection)
   const [pizzaItems, setPizzaItems] = useState([]);
   const [pizzaIsLoading, setPizzaIsLoading] = useState(true);
   const category = categoriesType > 0 ? `category=${categoriesType}` : ''
   const search = searching ? `search=${searching}` : ''
   const getPizzaItems = async (sortBy, category, search) => {
      const response = await axios.get(`https://639cb95942e3ad69273a707b.mockapi.io/items?sortBy=${sortBy}&${category}&${search}`)
      setPizzaItems(response.data)
      setPizzaIsLoading(false)
   }
   // const searchPizzaItem = async (search) => {
   //    const response = await axios.get(`https://639cb95942e3ad69273a707b.mockapi.io/items?search=${search}`)
   //    setPizzaItems(response.data)
   //    console.log(response.data);
   // }
   useEffect(() => {
      console.log('render');
      getPizzaItems(sortType, category, search)
      window.scrollTo(0, 0)
      // searchPizzaItem(searching)
   }, [sortType, categoriesType, searching]);
   return (
      <div className="container">
         <PizzaSelection />
         <PizzaList pizzaItems={pizzaItems} pizzaIsLoading={pizzaIsLoading} />
         {/* <Pagination  currentPage={currentPage} totalCount={pizzaItems.legth} pageSize={6}/> */}
      </div>
   );
}

export default Home;
