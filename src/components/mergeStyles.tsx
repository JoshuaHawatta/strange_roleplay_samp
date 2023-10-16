import { ClassValue, clsx } from "clsx";
import { twMerge } from "tw-merge";

const mergeStyles = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export default mergeStyles;
