import mergeStyles from "../mergeStyles";

type ButtonContainerProps = {
  children: React.ReactNode;
  styles?: React.ReactNode;
  onClick: () => unknown;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonContainer = ({ children, onClick, styles, ...props }: ButtonContainerProps) => (
  <button
    {...props}
    type='button'
    className={`flex justify-center items-center h-fit w-fit gap-2 md:gap-3 ${mergeStyles(
      "bg-blue-400 hover:bg-blue-300",
      styles
    )} transition ease-in-out px-6 py-3 rounded`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default ButtonContainer;
