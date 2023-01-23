import React from 'react'
import { useParams } from 'react-router-dom';
import api from '../../API/api';
import { useState } from 'react';
import { useEffect } from 'react';
import s from './pizza.module.scss'

export default function Pizza() {
   const [pizzaItem, setPizzaItem] = useState({});
   const pizzaId = useParams().pizza
   const getPizzaItem = async () => {
      const response = await api.getOnePizza(Number(pizzaId))
      setPizzaItem(response.data[0])

   }
   useEffect(() => {
      getPizzaItem(pizzaId)
   }, [pizzaId]);
   return (
      <div className='container'>
         <div className={s.pizzaItem}>
            <h3>{pizzaItem.title}</h3>
            <img className={s.pizzaImg} src={pizzaItem.imageUrl} alt="" />
         </div>
      </div>
   )
}
