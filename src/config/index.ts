import { getColor, ThemeType } from "../theme";

type Colors = Record<ThemeType, string>;

export type Options = {
  colors: Partial<Colors>,
}

export type InitTheme = (options?: Partial<Options>) => void;

export const initTheme: InitTheme = (options) => {
  console.log('init theme!');

  const defaultColors: Colors = {
    primary: 'blue',
    secondary: 'gray',
    success: 'green',
    info: 'teal',
    warning: 'yellow',
    danger: 'red',
    light: 'white',
    dark: 'black',
  }

  const colors = options?.colors ?? {};
  for(const k in defaultColors) {
    const type = k as ThemeType;
    const n = getColor(type);
    const v = colors[k] ? colors[k] : defaultColors[k];
    document.documentElement.style.setProperty(n, v);
  }
}

