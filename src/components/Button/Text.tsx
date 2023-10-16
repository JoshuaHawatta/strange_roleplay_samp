import mergeStyles from "../mergeStyles";

type ButtonTextProps = {
  content: string | number;
  styles?: string;
};

const ButtonText = ({ content, styles }: ButtonTextProps) => (
  <span className={`${mergeStyles("text-white", styles)} text-xs md:text-sm`}>{content}</span>
);

export default ButtonText;
