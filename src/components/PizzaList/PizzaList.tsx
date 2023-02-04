import React, { memo } from 'react';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import Skeleton from './PizzaBlock/Skeleton';
import s from './PizzaList.module.scss'

type pizzaItemsType = {
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
type PizzaListProps = {
   pizzaItems: pizzaItemsType[],
   isLoading: boolean | null
}

const PizzaList: React.FC<PizzaListProps> = ({ pizzaItems, isLoading }) => {
   return (
      <>
         <h2 className={s.contentTitle}>Все пиццы</h2>
         <div className={s.contentItems}>
            {isLoading
               ? [...new Array(6)].map((p, i) => <Skeleton key={i} />)
               : pizzaItems.map(p => <PizzaBlock key={p.id} {...p} />)
            }
         </div>
      </>
   );
}

export default memo(PizzaList);
