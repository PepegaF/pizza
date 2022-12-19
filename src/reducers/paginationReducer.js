const SET_SORT_TYPE = 'SET_SORT_TYPE'


const initialState = {
   currentPage: 1,
   perPage: 6,
   totalCount: 0,
}

const paginationReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_SORT_TYPE:
         return { ...state, }

      default:
         return state
   }
}

export const setSortType = (sortType) => ({ type: SET_SORT_TYPE, sort: sortType })
export default paginationReducer