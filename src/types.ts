export type ValueOf<T extends object> = T extends {[K in string]: infer V} ? V : never;
export type ListOf<L> = L extends (infer V)[] ? V : L extends readonly (infer V)[] ? V : L;