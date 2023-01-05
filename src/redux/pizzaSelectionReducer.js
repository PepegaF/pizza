import { createSlice } from "@reduxjs/toolkit";

export const pizzaSelectionReducer = createSlice({
   name: 'selection',
   initialState: {
      sortType: 'rating',
      categoriesType: 0,
      searching: ''
   },
   reducers: {
      setSortType(state, action) {
         state.sortType = action.payload
      },
      setCategoriesType(state, action) {
         state.categoriesType = action.payload
      },
      setSearching(state, action) {
         state.searching = action.payload
      },
      clearSearching(state, action) {
         state.searching = action.payload
      },
      setSelection(state, action) {
         state.searching = action.payload.searching
         state.categoriesType = action.payload.categoriesType
         state.sortType = action.payload.sortType
      }
   }
})

export default pizzaSelectionReducer.reducer
export const { setSortType, setCategoriesType, setSearching, clearSearching, setSelection } = pizzaSelectionReducer.actions
