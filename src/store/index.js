import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducerCollection from './reducers';
 
export default function configureStore() {
    return createStore(reducerCollection, applyMiddleware(thunk));
}