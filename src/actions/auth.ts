import { ActionCreator } from "redux";
import { AsyncAction } from "../types/action";

export const signIn: ActionCreator<AsyncAction<Promise<void>>> = (email: string, password: string) =>
  async (_1, _2, getFirebase) => {
    const firebase = getFirebase();
    await firebase.login({ email, password });
    return firebase.reloadAuth();
  };

export const signUp: ActionCreator<AsyncAction<Promise<void>>> = (email: string, password: string) =>
  async (_1, _2, getFirebase) => {
    const firebase = getFirebase();
    await firebase.createUser({ email, password });
    return firebase.reloadAuth();
  };

export const signOut: ActionCreator<AsyncAction<Promise<void>>> = () =>
  async (_1, _2, getFirebase) => {
    const firebase = getFirebase();
    return firebase.logout();
  };
