import { Action, AnyAction, combineReducers, Dispatch } from "redux";
import { all } from "redux-saga/effects";
import { uiReducer } from "./ui/reducer";
import { UiState } from "./ui/types";

export interface ApplicationState {
  ui: UiState
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

export const rootReducer = combineReducers<ApplicationState>({
  ui: uiReducer
});

export function* rootSaga() {
  yield all([

  ]);
}