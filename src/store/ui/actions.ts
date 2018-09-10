import { action } from "typesafe-actions";
import { UiActionTypes } from "./types";

export const openDrawer = () => action(UiActionTypes.OPEN_LEFT_DRAWER);
export const closeDrawer = () => action(UiActionTypes.CLOSE_LEFT_DRAWER);
export const toggleTheme = () => action(UiActionTypes.TOGGLE_THEME);