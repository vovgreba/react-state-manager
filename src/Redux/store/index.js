import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { dataReducer } from '../reducers/fetchData';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(dataReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;
