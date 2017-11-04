import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counter from '../Reducers/index';

const store = createStore(
    counter,
    applyMiddleware(thunk)
);

export default store;