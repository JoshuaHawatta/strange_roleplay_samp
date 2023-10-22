import mergeStyles from "../mergeStyles";

type InputContainerProps = {
  children: React.ReactNode;
  labelStyle?: string;
  containerStyle?: string;
} & ({ label: string; htmlFor: string } | { label?: never; htmlFor?: never });

const InputContainer = ({ children, htmlFor, label, labelStyle, containerStyle }: InputContainerProps) => (
  <section
    className={`${mergeStyles("flex flex-col items-start justify-center w-full md:w-60 lg:w-96", containerStyle)}`}
  >
    <label
      htmlFor={htmlFor}
      className={`${mergeStyles("mb-2 text-cyan-800 text-sm md:text-base px-4 md:px-0 pb-1", labelStyle)}`}
    >
      {label}
    </label>

    <div className='relative w-full h-8 mx-3 md:mx-0 flex items-center'>{children}</div>
  </section>
);

export default InputContainer;
