import { firebaseReducer, getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { applyMiddleware, combineReducers, compose, createStore as reduxCreateStore } from "redux";
import thunk from "redux-thunk";
import { firebaseStateName, Store } from "../types/store";
import { setupDb } from "./db";

// react-redux-firebase options
const config = {
  attachAuthIsReady: true, // attaches auth is ready promise to store
  enableLogging: false, // enable/disable Firebase's database logging
  firebaseStateName, // should match the reducer name ('firebase' is default)
  // userProfile: "users", // firebase root where user profiles are stored
};

export const createStore = (initialState = {}) => {
  const firebase = setupDb();

  // Add firebase to reducers
  const rootReducer = combineReducers({
    firebase: firebaseReducer,
  });

  // Add redux Firebase to compose
  const store: Store = reduxCreateStore(
    rootReducer,
    initialState,
    compose(
      reactReduxFirebase(firebase, config),
      applyMiddleware(thunk.withExtraArgument(getFirebase)),
    ),
  );

  // Listen for auth ready (promise available on store thanks to attachAuthIsReady: true config option)
  // store.firebaseAuthIsReady.then(() => {
  //   console.log("Auth has loaded"); // tslint:disable-line no-console
  // });

  return store;
};
