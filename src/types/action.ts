import { getFirebase } from "react-redux-firebase";
import { Action, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { State } from "./state";

export type AsyncAction<R, A extends Action = AnyAction> = ThunkAction<R, State, typeof getFirebase, A>;
export type Dispatch<A extends Action = AnyAction> = ThunkDispatch<State, typeof getFirebase, A>;
