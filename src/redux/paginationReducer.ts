import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../API/api';
import { getPizzas, paginationState, pizzaItem } from "./types";



export const getPizzaItems = createAsyncThunk<pizzaItem[], getPizzas>(
   'paginator/getPizzaItems',
   async function (params) {
      const { sort, category, search, pagination } = params
      const response = await api.getPizzaItems(sort, category, search, pagination)
      return response.data
   }
)

const initialState: paginationState = {
   currentPage: 1,
   perPage: 30,
   totalCount: 10,
   // потому что mockapi не возвращает в запросе длину массива 
   pizzaItems: [],
   isLoading: null
}

const paginationReducer = createSlice({
   name: 'pagination',
   initialState,
   reducers: {
      changeCurrentPage(state, action) {
         state.currentPage += action.payload
      },
      setCurrentPage(state, action) {
         state.currentPage = action.payload
      },
      // changeCurrentPage(state) {
      //    state.currentPage += 1
      // },
   },
   extraReducers: (builder) => {
      builder.addCase(getPizzaItems.pending, (state) => {
         state.isLoading = true
      }),
         builder.addCase(getPizzaItems.fulfilled, (state, action) => {
            // state.pizzaItems = [...state.pizzaItems, ...action.payload]
            state.pizzaItems = action.payload
            state.isLoading = false
         })
   }
})

export default paginationReducer.reducer
export const { changeCurrentPage, setCurrentPage } = paginationReducer.actions
