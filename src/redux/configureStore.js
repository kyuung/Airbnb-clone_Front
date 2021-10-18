import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import loggerMiddleware from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'
import { takeEvery, call, put, all } from 'redux-saga/effects'

/* saga */
import { counterSaga } from './modules/counter'
/* reducer */
import Counter from './modules/counter'

export const history = createBrowserHistory()

const rootReducer = combineReducers({
  counter: Counter,
  router: connectRouter(history),
})

function* rootSaga() {
  yield all([counterSaga])
}

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, loggerMiddleware]

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)
//store.sagaTask =

export default store
