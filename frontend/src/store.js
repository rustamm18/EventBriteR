import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { eventListReducer, eventDetailsReducer, } from './reducers/eventReducers'
import { cartReducer } from './reducers/cartReducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer,  userDetailsReducer,
   userUpdateProfileReducer,  } from './reducers/userReducers'
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer } from './reducers/orderReducers'

const reducer = combineReducers({
   eventList: eventListReducer,
   eventDetails: eventDetailsReducer,
   cart: cartReducer,
   userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer, 
  orderDetails: orderDetailsReducer, 
  orderPay: orderPayReducer, 
  orderListMy: orderListMyReducer,  
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? 
 JSON.parse(localStorage.getItem('cartItems')) : []

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? 
  JSON.parse(localStorage.getItem('shippingAddress')) : {}

const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? 
  JSON.parse(localStorage.getItem('paymentMethod')) : {}

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
 JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
   cart: {cartItems: cartItemsFromStorage,
      shippingAddress: shippingAddressFromStorage,
      paymentMethod: paymentMethodFromStorage,
   },
   userLogin: {userInfo: userInfoFromStorage}
}
const middleware = [thunk]
const store = createStore(
                reducer,
                initialState,
                composeWithDevTools(applyMiddleware(...middleware))
                )


              
 
export default store