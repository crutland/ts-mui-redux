export type ThemeType = "light" | "dark";

export interface UiState {
  leftDrawerOpen: boolean;
  title?: string;
  theme: ThemeType
}

export const enum UiActionTypes {
  OPEN_LEFT_DRAWER = "@@ui/OPEN_LEFT_DRAWER",
  CLOSE_LEFT_DRAWER = "@@ui/CLOSE_LEFT_DRAWER",
  TOGGLE_THEME = "@@ui/TOGGLE_THEME"
}

let theme = <ThemeType>localStorage.getItem("theme");
if(!theme) theme = "light";

export const InitialState: UiState = {
  leftDrawerOpen: false,
  title: process.env.REACT_APP_DEFAULT_TITLE,
  theme
};