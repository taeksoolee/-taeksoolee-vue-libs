import { ThemeType } from "../theme";
type Colors = Record<ThemeType, string>;
export type Options = {
    colors: Partial<Colors>;
};
export type InitTheme = (options?: Partial<Options>) => void;
export declare const initTheme: InitTheme;
export {};
//# sourceMappingURL=index.d.ts.map