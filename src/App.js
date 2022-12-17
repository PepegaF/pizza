import './App.css';
import Header from './components/Header/Header';
import './scss/app.scss'
import Sort from './components/Sort/Sort';
import Categories from './components/Categories/Categories';
import PizzaList from './components/PizzaList/PizzaList';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {
   const [pizzaItems, setPizzaItems] = useState([]);
   const getPizzaItem = async () => {
      const response = await axios.get('https://639cb95942e3ad69273a707b.mockapi.io/items')
      setPizzaItems(response.data)
   }
   useEffect(() => {
      getPizzaItem()
   }, []);
   return (
      <div className="App">
         <div className="Wrapper">
            <Header />
            <div className="content">
               <div className="container">
                  <div className="content__top">
                     <Categories />
                     <Sort />
                  </div>
                  <h2 className="content__title">Все пиццы</h2>
                  <div className="content__items">
                     <PizzaList pizzaItems={pizzaItems} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
