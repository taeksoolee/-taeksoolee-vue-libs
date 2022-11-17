import { ButtonHTMLAttributes, type PropType } from 'vue';
import { type ThemeType } from '@/theme';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"submit" | "reset" | "button" | undefined>;
        default(): ButtonHTMLAttributes['type'];
    };
    varient: {
        type: PropType<"primary" | "secondary" | "success" | "info" | "danger" | "warning" | "light" | "dark">;
        default(): ThemeType;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<"submit" | "reset" | "button" | undefined>;
        default(): ButtonHTMLAttributes['type'];
    };
    varient: {
        type: PropType<"primary" | "secondary" | "success" | "info" | "danger" | "warning" | "light" | "dark">;
        default(): ThemeType;
    };
}>>, {
    type: "submit" | "reset" | "button" | undefined;
    varient: "primary" | "secondary" | "success" | "info" | "danger" | "warning" | "light" | "dark";
}>;
export default _default;
//# sourceMappingURL=TButton.vue?vue&type=script&setup=true&lang.d.ts.map