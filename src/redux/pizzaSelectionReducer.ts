import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface pizzaSelectionState {
   sortType: string,
   categoriesType: number,
   searching: string,
   currentPage?: number
}
const initialState: pizzaSelectionState = {
   sortType: 'rating',
   categoriesType: 0,
   searching: ''
}

export const pizzaSelectionReducer = createSlice({
   name: 'selection',
   initialState,
   reducers: {
      setSortType(state, action: PayloadAction<string>) {
         state.sortType = action.payload
      },
      setCategoriesType(state, action: PayloadAction<number>) {
         state.categoriesType = action.payload
      },
      setSearching(state, action: PayloadAction<string>) {
         state.searching = action.payload
      },
      clearSearching(state, action: PayloadAction<string>) {
         state.searching = action.payload
      },
      setSelection(state, action: PayloadAction<pizzaSelectionState>) {
         state.searching = action.payload.searching
         state.categoriesType = action.payload.categoriesType
         state.sortType = action.payload.sortType
      }
   }
})

export default pizzaSelectionReducer.reducer
export const { setSortType, setCategoriesType, setSearching, clearSearching, setSelection } = pizzaSelectionReducer.actions
