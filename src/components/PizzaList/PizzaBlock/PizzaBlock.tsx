import React from 'react';
import { useState } from 'react';
import { addPizzaToCart } from '../../../redux/cartReducer';
import Button from './Button/Button';
import { NavLink } from 'react-router-dom';
import s from './PizzaBlock.module.scss'
import { useAppDispatch } from './../../../hooks/hooks';

type PizzaBlockProps = {
   id: number,
   imageUrl: string,
   title: string,
   types: number[],
   sizes: number[],
   price: number,
   count: number,
   category: number,
   rating: number
}

const PizzaBlock: React.FC<PizzaBlockProps> = ({ id, title, price, imageUrl, sizes, types, category, rating }) => {
   const dispatch = useAppDispatch()
   const [activeType, setActiveType] = useState(0);
   const [activeSize, setActiveSize] = useState(0);
   const typesNames: string[] = ['тонкое', 'традиционное']
   const newId: number = Number(id + String(activeType) + String(activeSize))
   const addToCart = () => {
      const addingPizza = {
         id: newId,
         imageUrl,
         title,
         type: typesNames[activeType],
         size: sizes[activeSize],
         price,
         category,
         rating,
         count: 0
      }
      dispatch(addPizzaToCart(addingPizza))
   }
   return (
      <div className='pizza-block-wrapper'>
         <div className={s.pizzaBlock}>
            <NavLink to={`/home/${id}`}>
               <img
                  className={s.pizzaBlockImage}
                  src={imageUrl}
                  alt="Pizza"
               />
            </NavLink>
            <h4 className={s.pizzaBlockTitle}>{title}</h4>
            <div className={s.pizzaBlockSelector}>
               <ul>
                  {types.map((t, i) =>
                     <li className={activeType === t ? s.active : ''} onClick={() => setActiveType(i)} key={i} >{typesNames[t]}</li>
                  )}
               </ul>
               <ul>
                  {sizes.map((size, i) =>
                     <li className={activeSize === i ? s.active : ''} onClick={() => setActiveSize(i)} key={i} >{size} см.</li>
                  )}

               </ul>
            </div>
            <div className={s.pizzaBlockBottom}>
               <div className={s.pizzaBlockPrice}>от {price} ₽</div>
               <Button id={newId} addToCart={addToCart} />
            </div>
         </div>
      </div>
   );
}

export default PizzaBlock;
