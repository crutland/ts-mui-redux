import { Reducer } from "redux";
import { UiActionTypes, UiState, InitialState } from "./types";

const initialState: UiState = { ...InitialState };

const reducer: Reducer<UiState> = (state = initialState, action) => {
  switch (action.type) {

    case UiActionTypes.OPEN_LEFT_DRAWER: {
      return { ...state, leftDrawerOpen: true };
    }

    case UiActionTypes.CLOSE_LEFT_DRAWER: {
      return { ...state, leftDrawerOpen: false };
    }

    case UiActionTypes.TOGGLE_THEME: {
      const theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", theme);
      return { ...state, theme };
    }

    default: {
      return state;
    }

  }
}

export { reducer as uiReducer };