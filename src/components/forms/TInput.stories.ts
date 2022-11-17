
import TInput from "./TInput.vue";
import { SBDefault } from "../../types";
import { getSBTemplate } from "../../utils";

const sb: SBDefault = {
  title: "Components/Forms/TInput",
  component: TInput
};

type Props = {
  autoCompleteList?: string[]
};

const template = getSBTemplate<Props>({
  components: { TInput },
  template: `
    <t-input
      :auto-complete-list="args.autoCompleteList"
    />
  `
});

export const Basic = template({});
export const AutoComplete = template({
  autoCompleteList: [
    'taeksoolee',
    'test text',
  ]
});


// export const Basic = template({});
export default sb;