import React from 'react';
import { useState } from 'react';

const Categories = () => {
   const listOfCategories = ['Всё', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
   const [activeIndex, setActiveIndex] = useState(0);

   return (
      <div className="categories">
         <ul>
            {listOfCategories.map((item, index) =>
               <li key={index} className={activeIndex === index ? 'active' : ''} onClick={() => setActiveIndex(index)}>{item}</li>
            )}
         </ul>
      </div>
   )
}

export default Categories;
