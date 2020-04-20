import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import logger from 'redux-logger'


const middlewares = [thunk, logger]


export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(...middlewares)
    );
}