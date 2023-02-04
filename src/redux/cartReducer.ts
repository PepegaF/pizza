import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS } from './../utils/getCartFromLS';
import { pizza, pizzaCartState } from "./types";


const initialState: pizzaCartState = {
   totalPrice: 0,
   cartPizzas: getCartFromLS()
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
