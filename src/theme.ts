import { ListOf } from "./types";

export const ThemeTypeList = [
  'primary',
  'secondary',
  'success',
  'info',
  'danger',
  'warning',
  'light',
  'dark',
] as const;

export const ThemeTypes = {
  PRIMARY: ThemeTypeList[0],
  SECONDARY: ThemeTypeList[1],
  SUCCESS: ThemeTypeList[2],
  INFO: ThemeTypeList[3],
  DANGER: ThemeTypeList[4],
  WARNING: ThemeTypeList[5],
  LIGHT: ThemeTypeList[6],
  DART: ThemeTypeList[7],
} as const;

export type ThemeType = ListOf<typeof ThemeTypeList>;

type GetColor = (type: ThemeType) => string;
export const getColor: GetColor = type => `--tds-${type}-color`;
