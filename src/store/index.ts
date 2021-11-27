// in src/createAdminStore.js
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import { adminReducer, adminSaga } from "react-admin";
import { themeReducers } from "./theme/theme.slice";

export const store = ({
  dataProvider,
  history,
}: {
  dataProvider: any;
  history: any;
}) => {
  const reducer = combineReducers({
    admin: adminReducer,
    router: connectRouter(history),
    theme: themeReducers,
  });

  const saga = function* rootSaga() {
    yield all([adminSaga(dataProvider, null)].map(fork));
  };
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    (process.env.NODE_ENV === "development" &&
      typeof window !== "undefined" && // @ts-ignore: Unreachable code error
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__! && // @ts-ignore: Unreachable code error
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })) ||
    compose;

  const store = createStore(
    reducer,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  );

  sagaMiddleware.run(saga);

  return store;
};
