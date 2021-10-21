import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

/* 모듈 불러오기 */
import counterSlice from './modules/counter';
import roomSlice from './modules/roomSlice';

export const history = createBrowserHistory();

/* 리듀서 전달하기 */
const reducer = combineReducers({
	router: connectRouter(history),
	counter: counterSlice.reducer,
	room: roomSlice.reducer,
});

const middlewares = [];

const env = process.env.NODE_ENV;

if (env === 'development') {
	const { logger } = require('redux-logger');
	middlewares.push(logger);
}

const store = configureStore({
	reducer,
	middleware: [...middlewares, ...getDefaultMiddleware()],
	devTools: env !== 'production',
});

export default store;
