import React from 'react';
import { useState } from 'react';
import Button from './../../UI/Button/Button';
const PizzaBlock = ({ title, price, imageUrl, sizes, types }) => {
   const [activeType, setActiveType] = useState(0);
   const [activeSize, setActiveSize] = useState(0);
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
                     <li className={activeType === t ? "active" : ''} onClick={() => setActiveType(i)} key={i} >{t === 0 ? 'тонкое' : 'традиционное'}</li>
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
               <Button />
            </div>
         </div>
      </div>
   );
}

export default PizzaBlock;
