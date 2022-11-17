import { ButtonHTMLAttributes } from "vue";
import TButton from "./TButton.vue";
import { SBDefault } from "../../types";
import { getSBTemplate } from "../../utils";
import { ThemeType } from "../../theme";

const sb: SBDefault = {
  title: "Components/Forms/TButton",
  component: TButton
};

type Props = {
  type?: ButtonHTMLAttributes['type'],
  varient?: ThemeType
};

const template = getSBTemplate<Props>({
  components: { TButton },
  template: `
    <t-button 
      :type="args.type"
      :varient="args.varient"
    >
      T-Button
    </t-button>
  `
});

export const Basic = template({});

export const Primary = template({ varient: 'primary', });
export const Secondary = template({ varient: 'secondary', });
export const Success = template({ varient: 'success', });
export const Info = template({ varient: 'info', });
export const Warning = template({ varient: 'warning', });
export const Danger = template({ varient: 'danger', });
export const Light = template({ varient: 'light', });
export const Dark = template({ varient: 'dark', });


// export const Basic = template({});
export default sb;