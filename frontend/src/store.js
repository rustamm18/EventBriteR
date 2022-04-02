import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { eventListReducer, eventDetailsReducer, } from './reducers/eventReducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
   eventList: eventListReducer,
   eventDetails: eventDetailsReducer, 
})
const initialState = {}
const middleware = [thunk]
const store = createStore(
                reducer,
                initialState,
                composeWithDevTools(applyMiddleware(...middleware))
                )

export default store