import mergeStyles from "../mergeStyles";

export type Event = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;

type InputIndexProps = {
  onChange: (event: Event) => unknown;
  styles?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputIndex = ({ styles, ...props }: InputIndexProps) => (
  <>
    <input
      {...props}
      className={`${mergeStyles("w-11/12 md:w-full h-full p-3 outline-none font-medium rounded-md", styles)}`}
    />
  </>
);

export default InputIndex;
