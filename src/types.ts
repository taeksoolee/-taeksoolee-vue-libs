import { Component } from "vue";

export type ValueOf<T extends object> = T extends {[K in string]: infer V} ? V : never;
export type ListOf<L> = L extends (infer V)[] ? V : L extends readonly (infer V)[] ? V : L;








/**
 * Storybook Types
 */
type SBDecorator = () => {
  template: string;
};

export type SBDefault = {
  title: string;
  component: Component;
  decorators?: SBDecorator[];
  parameters?: {
    docs?: {
      description?: {
        component: string;
      };
    };
  };
};

export type SBContext<Props extends object> = {
  abortSignal: unknown;
  applyLoaders: unknown;
  argTypes: {
    [K in keyof Props]: {
      control: { type: string };
      description?: string;
      name: string;
      table: {
        type: {
          summary: string;
          detail?: unknown;
        };
        jsDocTags?: unknown;
        defaultValue: unknown | null;
        category: "props";
      };
      type: {
        // vue component type에서 정의
        required?: boolean;
        name: string;
        value: string;
      };
    };
  };
  args: Props;
  canvasElement: unknown;
  component: unknown;
  componentId: unknown;
  globals: unknown;
  hooks: unknown;
  id: unknown;
  initialArgs: unknown;
  kind: unknown;
  loaded: unknown;
  name: unknown;
  originalStoryFn: unknown;
  parameters: unknown;
  playFunction: unknown;
  story: unknown;
  subcomponents: unknown;
  title: unknown;
  unboundStoryFn: unknown;
  undecoratedStoryFn: unknown;
  viewMode: unknown;
};