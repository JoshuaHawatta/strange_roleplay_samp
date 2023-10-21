import { create } from "zustand";
import { ElementType } from "react";
import { Info } from "lucide-react";

type ToastType = "success" | "info" | "warning" | "error";

type ShowToastProps = {
  message: string;
  icon?: ElementType;
  type?: ToastType;
  duration?: number;
};

type ToastState = {
  visible: boolean;
  message: string;
  Icon: ElementType;
  type: ToastType;
  duration?: number;
  showToast: ({ message, icon, type, duration }: ShowToastProps) => void;
  hideToast: () => void;
};

const useToastStore = create<ToastState>(set => ({
  visible: false,
  message: "",
  Icon: Info,
  type: "info",
  duration: 5000,

  showToast: ({ message, icon: Icon = Info, type = "info", duration = 5000 }) =>
    set({
      visible: true,
      message,
      Icon,
      type,
      duration,
    }),

  hideToast: () => set({ visible: false }),
}));

export default useToastStore;
