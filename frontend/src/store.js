import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { eventListReducer, eventDetailsReducer, } from './reducers/eventReducers'
import { cartReducer } from './reducers/cartReducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
   eventList: eventListReducer,
   eventDetails: eventDetailsReducer,
   cart: cartReducer, 
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? 
 JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
   cart: {cartItems: cartItemsFromStorage}
}
const middleware = [thunk]
const store = createStore(
                reducer,
                initialState,
                composeWithDevTools(applyMiddleware(...middleware))
                )


              
 
export default store