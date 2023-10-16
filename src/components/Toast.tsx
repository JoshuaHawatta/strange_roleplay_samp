import { useEffect } from "react";
import { X } from "lucide-react";
import useToastStore from "../stores/toast";

const toastColors = {
  success: "bg-emerald-500",
  warning: "bg-lime-500",
  info: "bg-sky-400",
  error: "bg-rose-600",
};

const Toast = () => {
  const { visible, message, Icon, type, duration, hideToast } = useToastStore();

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => hideToast(), duration);

      return () => clearTimeout(timer);
    }
  }, [visible, hideToast, duration]);

  return (
    <>
      {visible && (
        <div
          className={`fixed gap- bottom-0 items-center justify-center md:justify-normal md:right-4 md:bottom-4 z-10 p-5 md:p-4 md:rounded-lg shadow-lg ${toastColors[type]} text-white flex items-center space-x-2 md:max-w-md w-full md:w-fit sm:w-auto transform transition-all`}
        >
          <div className='flex gap-2 w-full'>
            <Icon />
            <span>{message}</span>
          </div>
          <button onClick={() => hideToast()} className='ml-auto'>
            <X />
          </button>
        </div>
      )}
    </>
  );
};

export default Toast;
