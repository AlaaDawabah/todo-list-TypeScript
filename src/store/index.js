import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const middlewares = [thunk];
const composeEnhancers =
  (typeof window != "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
