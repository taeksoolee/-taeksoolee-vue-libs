

type GetUUID = (prefix?: string) => string;

const UUIDGenerator = () => {
  const uuids: string[] = [];

  const getUUID: GetUUID = (prefix='') => {
    return `${prefix}__${Math.round(Math.random() * 10000)}`;
  }

  const get = (prefix='') => {
    while(true) {
      const uuid = getUUID(prefix);
      if (uuids.includes(uuid)) {
        continue;
      }

      uuids.push(uuid);
      return uuid;
    }
  }

  const del = (uuid: string) => {
    for(let i=0; i < uuids.length; i++){ 
      if (uuids[i] === uuid) { 
        uuids.splice(i, 1); 
        i--;
      }
    }
  }

  return {
    get,
    del 
  }
}

export const uuidGenerator = UUIDGenerator();




import { Component } from "vue";
/**
 * Storybook Uitlity
 */
import { SBContext } from "../types";

export const getSBTemplate = <P extends object>(config: {
  components: { [k in string]: Component };
  template: string;
}) => {
  return (args: P) => {
    const fn = (_args: P, context: SBContext<P>) => {
      return {
        props: Object.keys(context.argTypes),
        components: config.components,
        setup() {
          return {args}
        },
        template: config.template
      };
    };

    fn.bind({});
    fn.args = args;

    return fn;
  };
};