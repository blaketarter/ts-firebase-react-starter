import { navigate } from "@reach/router";
import { auth } from "firebase";
import { rootUrl, signInUrl } from "../types/route";

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
