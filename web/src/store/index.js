import { createStore, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import history from "../routes/history";

const middlewares = [thunk, routerMiddleware(history)];

// Passar os reducers como segundo parâmetro da function connectRouter()
const store = createStore(
  connectRouter(history)(() => { null }),
  applyMiddleware(...middlewares)
);

export default store;