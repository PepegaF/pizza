import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type pizza = {
   id: number,
   imageUrl: string,
   title: string,
   type: string,
   size: number,
   price: number,
   count: number,
}
interface pizzaCartState {
   totalPrice: number,
   cartPizzas: pizza[]
}
const initialState: pizzaCartState = {
   totalPrice: 0,
   cartPizzas: [
      // {
      //    "id": 0,
      //    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
      //    "title": "Пепперони Фреш с перцем",
      //    "types": [
      //       0,
      //       1
      //    ],
      //    "sizes": [
      //       26,
      //       30,
      //       40
      //    ],
      //    "price": 803,
      //    "category": 1,
      //    "rating": 4
      // },
   ]
}

export const pizzaCartReducer = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addPizzaToCart(state, action: PayloadAction<pizza>) {
         const findItem = state.cartPizzas.find(obj => obj.id === action.payload.id && obj.type === action.payload.type && obj.size === action.payload.size)
         findItem ? findItem.count++ : state.cartPizzas.push({ ...action.payload, count: 1 })
      },
      minusPizza(state, action: PayloadAction<number>) {
         const findItem = state.cartPizzas.find(obj => obj.id === action.payload)
         if (findItem) {
            findItem.count--
            if (findItem.count < 1) state.cartPizzas = state.cartPizzas.filter(item => item.id !== action.payload)
         }
      },
      removePizzaFromCart(state, action: PayloadAction<number>) {
         state.cartPizzas = state.cartPizzas.filter(item => item.id !== action.payload)
      },
      removeAllPizzaFromCart(state) {
         state.cartPizzas = []
      },
      getTotalPizzaPrice(state) {
         state.totalPrice = state.cartPizzas.reduce((sum, obj) => {
            return sum + (obj.price * obj.count)
         }, 0)
      },
   }
})

export default pizzaCartReducer.reducer
export const { addPizzaToCart, removePizzaFromCart, removeAllPizzaFromCart, minusPizza, getTotalPizzaPrice } = pizzaCartReducer.actions
