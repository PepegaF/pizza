import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from './../API/api';

export const getPizzaItems = createAsyncThunk(
   'paginator/getPizzaItems',
   async function ({ sort, category, search, pagination }) {
      const response = await api.getPizzaItems(sort, category, search, pagination)
      return response.data
   }
)

const paginationReducer = createSlice({
   name: 'pagination',
   initialState: {
      currentPage: 1,
      perPage: 10,
      totalCount: 30,
      // потому что mockapi не возвращает в запросе длину массива 
      pizzaItems: [],
      isLoading: null
   }
   ,
   reducers: {
      changeCurrentPage(state, action) {
         state.currentPage += action.payload
      },
   },
   extraReducers: {
      [getPizzaItems.pending]: (state, action) => {
         state.isLoading = true
      },
      [getPizzaItems.fulfilled]: (state, action) => {
         state.pizzaItems = action.payload
         state.isLoading = false
      }
   }
})

export default paginationReducer.reducer
export const { setLoading, changeCurrentPage } = paginationReducer.actions
