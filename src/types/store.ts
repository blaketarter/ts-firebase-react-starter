import { Store as ReduxStore } from "redux";

export const firebaseStateName = "firebase";

export type Store = ReduxStore<{ [firebaseStateName]: any; }> & { firebaseAuthIsReady: Promise<void> };
