import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer';
import paginationReducer from './paginationReducer';
import pizzaSelectionReducer from './pizzaSelectionReducer';


export const store = configureStore({
   reducer: {
      selection: pizzaSelectionReducer,
      pagination: paginationReducer,
      cart: cartReducer,
   }
})
// window.store = store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
