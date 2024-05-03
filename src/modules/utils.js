import config from "./config";

export const isUserUnit = unit => config.units === unit;

export const isThemeDark = theme => theme === "dark";
