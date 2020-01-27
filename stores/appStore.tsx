import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
// redux-saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleware));

const appStore = initialState => {
  const store = createStore(rootReducer, initialState, composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default appStore;
