import { navigate } from "@reach/router";
import { auth, initializeApp } from "firebase";
import { route } from "../types/route";

const rootUrl: route = "/";
const signInUrl: route = "/sign-in";

export const setup = () => {
  const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  };
  return initializeApp(config);
};

export const isAuthenticated = () => {
  return auth().currentUser !== null;
};

export const signIn = (username: string, password: string) => {
  return auth().signInWithEmailAndPassword(username, password).then(() => {
    navigate(rootUrl);
  });
};

export const signUp = (username: string, password: string, confirmPassword: string) => {
  if (password !== confirmPassword) {
    return Promise.reject("Password does not match");
  }
  return auth().createUserWithEmailAndPassword(username, password).then(() => {
    navigate(rootUrl);
  });
};

export const signOut = () => {
  return auth().signOut().then(() => {
    navigate(signInUrl);
  });
};
