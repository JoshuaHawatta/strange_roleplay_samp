import { ElementType } from "react";
import mergeStyles from "../mergeStyles";

type ButtonIconProps = {
  icon: ElementType;
  styles?: string;
};

const ButtonIcon = ({ icon: Icon, styles }: ButtonIconProps) => (
  <Icon className={`${mergeStyles("text-white", styles)} w-4 h-4 md:w-4 md:h-4`} />
);

export default ButtonIcon;
