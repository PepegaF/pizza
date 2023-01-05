import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import paginationReducer from './paginationReducer';
import pizzaSelectionReducer from './pizzaSelectionReducer';

const rootReducer = combineReducers({
   selection: pizzaSelectionReducer,
   pagination: paginationReducer,
   cart: cartReducer,
})

export const store = configureStore({
   reducer: rootReducer
})
window.store = store
