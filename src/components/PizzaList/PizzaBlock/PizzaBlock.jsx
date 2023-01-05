import React from 'react';
import { useState } from 'react';
import { addPizzaToCart } from '../../../redux/cartReducer';
import Button from './../../UI/Button/Button';
import { useDispatch } from 'react-redux';
const PizzaBlock = ({ id, title, price, imageUrl, sizes, types, category, rating }) => {
   const dispatch = useDispatch()
   const [activeType, setActiveType] = useState(0);
   const [activeSize, setActiveSize] = useState(0);
   const typesNames = ['тонкое', 'традиционное']
   const sizesValues = [26, 30, 40]

   const addToCart = () => {
      const addingPizza = {
         id: Number(id + String(activeType) + String(activeSize)),
         imageUrl,
         title,
         types: typesNames[activeType],
         sizes: sizesValues[activeSize],
         price,
         category,
         rating
      }
      console.log(addingPizza);
      dispatch(addPizzaToCart(addingPizza))
   }
   return (
      <div className='pizza-block-wrapper'>
         <div className='pizza-block'>
            <img
               className='pizza-block__image'
               src={imageUrl}
               alt="Pizza"
            />
            <h4 className='pizza-block__title'>{title}</h4>
            <div className='pizza-block__selector'>
               <ul>
                  {types.map((t, i) =>
                     <li className={activeType === t ? "active" : ''} onClick={() => setActiveType(i)} key={i} >{typesNames[t]}</li>
                  )}
               </ul>
               <ul>
                  {sizes.map((size, i) =>
                     <li className={activeSize === i ? "active" : ''} onClick={() => setActiveSize(i)} key={i} >{size} см.</li>
                  )}

               </ul>
            </div>
            <div className='pizza-block__bottom'>
               <div className='pizza-block__price'>от {price} ₽</div>
               <Button id={id} addToCart={addToCart} />
            </div>
         </div>
      </div>
   );
}

export default PizzaBlock;
