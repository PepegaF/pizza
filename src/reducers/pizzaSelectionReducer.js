const SET_SORT_TYPE = 'SET_SORT_TYPE'
const SET_CATEGORIES_TYPE = 'SET_CATEGORIES_TYPE'
const SET_SEARCH = 'SET_SEARCH'
const CLEAR_SEARCH = 'CLEAR_SEARCH'


const initialState = {
   sortType: 'rating',
   categoriesType: 0,
   searching: ''
}

const pizzaSelectionReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_SORT_TYPE:
         return { ...state, sortType: action.sort }
      case SET_CATEGORIES_TYPE:
         return { ...state, categoriesType: action.categories }
      case SET_SEARCH:
         return { ...state, searching: action.searching }
      case CLEAR_SEARCH:
         return { ...state, searching: action.searching }
      default:
         return state
   }
}

export const setSortType = (sortType) => ({ type: SET_SORT_TYPE, sort: sortType })
export const setCategoriesType = (categoriesType) => ({ type: SET_CATEGORIES_TYPE, categories: categoriesType })
export const setSearching = (search) => ({ type: SET_SEARCH, searching: search })
export const clearSearching = () => ({ type: CLEAR_SEARCH, searching: '' })
// export const initializeApp = () => async (dispatch) => {
//    await dispatch(getAuth())
//    dispatch(initializedSucces())

// }
export default pizzaSelectionReducer