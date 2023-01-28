import { createSlice } from "@reduxjs/toolkit";

type pizza = {
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
interface pizzaSelectionState {
   totalPrice: number,
   cartPizzas: pizza[]
}
const initialState: pizzaSelectionState = {
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

export const pizzaSelectionReducer = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addPizzaToCart(state, action) {
         const findItem = state.cartPizzas.find(obj => obj.id === action.payload.id && obj.types === action.payload.types && obj.sizes === action.payload.sizes)
         findItem ? findItem.count++ : state.cartPizzas.push({ ...action.payload, count: 1 })
      },
      minusPizza(state, action) {
         const findItem = state.cartPizzas.find(obj => obj.id === action.payload)
         if (findItem) {
            findItem.count--
            if (findItem.count < 1) state.cartPizzas = state.cartPizzas.filter(item => item.id !== action.payload)
         }
      },
      removePizzaFromCart(state, action) {
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

export default pizzaSelectionReducer.reducer
export const { addPizzaToCart, removePizzaFromCart, removeAllPizzaFromCart, minusPizza, getTotalPizzaPrice } = pizzaSelectionReducer.actions
