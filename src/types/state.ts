import { firebaseStateName } from "./store";

export interface State {
  [firebaseStateName]: any;
}
