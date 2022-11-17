import { ListOf } from "./types";
export declare const ThemeTypeList: readonly ["primary", "secondary", "success", "info", "danger", "warning", "light", "dark"];
export declare const ThemeTypes: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly SUCCESS: "success";
    readonly INFO: "info";
    readonly DANGER: "danger";
    readonly WARNING: "warning";
    readonly LIGHT: "light";
    readonly DART: "dark";
};
export type ThemeType = ListOf<typeof ThemeTypeList>;
type GetColor = (type: ThemeType) => string;
export declare const getColor: GetColor;
export {};
//# sourceMappingURL=theme.d.ts.map