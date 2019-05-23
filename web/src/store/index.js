import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import history from "../routes/history";

import createRootReducer from '../reducers'

const middlewares = [routerMiddleware(history),thunk];

// Passar os reducers como segundo parâmetro da function connectRouter()
export default function configureStore(preloadedState){
 const store = createStore(
   createRootReducer(history),
   preloadedState,
   compose(
     applyMiddleware(...middlewares),
   )
 )

   return store;
};
