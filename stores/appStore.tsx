import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
// redux-saga
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import appState from "../stores/appState";

const appStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];

  const composedEnhancers = compose(applyMiddleware(...middleware));

  const store = createStore(rootReducer, composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
};

export default appStore;
