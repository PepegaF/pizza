import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import pizzaSelectionReducer from './pizzaSelectionReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import paginationReducer from './paginationReducer';

const rootReducer = combineReducers({
   selection: pizzaSelectionReducer,
   pagination: paginationReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
window.store = store