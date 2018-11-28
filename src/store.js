import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {todoReducer, todoMapReducer} from './reducers/index';

const rootReducer = combineReducers({
    todoState : todoReducer, 
    todoMapState : todoMapReducer
});
const composeEnhancers = compose;
const store = createStore (
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
const {dispatch} = store;
export default store;
export {dispatch};