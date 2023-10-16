import { ElementType } from "react";
import mergeStyles from "../mergeStyles";

type InputIconProps = {
  icon: ElementType;
  position?: "left" | "right";
  style?: string;
  onClick?: () => unknown;
};

const iconPositionStyles = {
  left: "absolute top-1.5 left-3",
  right: "absolute top-1.5 sm:right-20 md:right-4 right-12",
};

const InputIcon = ({ icon: Icon, style, onClick, position = "right" }: InputIconProps) => (
  <button onClick={onClick} type='button' className={iconPositionStyles[position]}>
    <Icon className={`w-5 h-5 ${mergeStyles("text-cyan-800", style)}`} />
  </button>
);

export default InputIcon;
