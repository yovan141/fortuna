import ForToast from "@/components/Shared/ForToast/ForToast";
import { ForToastPreset } from "@/models/fortune.models";
import toast, { Toast, ToastPosition } from "react-hot-toast";

const TOAST_DEFAULT_DURATION = 4000

interface ShowToastProps {
  title: string
  position?: ToastPosition
  duration?: number
  preset: ForToastPreset
}

const Toast = {
  show: (props: ShowToastProps) => {
    const {
      title,
      position = "top-right",
      duration = TOAST_DEFAULT_DURATION,
      preset
    } = props
    toast.custom((t: Toast) => <ForToast title={title} preset={preset} toastProps={t} />, {
      id: title,
      duration,
      position,
      // Styling
      // style: {},
      // className: '',
    
      // Custom Icon
      // icon: '👏',
    
      // Change colors of success/error/loading icon
      // iconTheme: {
      //   primary: '#000',
      //   secondary: '#fff',
      // },
    
      // Aria
      // ariaProps: {
      //   role: 'status',
      //   'aria-live': 'polite',
      // },
    });
  }
}

export default Toast