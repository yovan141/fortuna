import { ForToastPreset } from "@/models/fortune.models"
import styles from "./ForToast.module.scss"
import toast, { Toast } from "react-hot-toast"

interface ForToastProps {
  title: string
  preset: ForToastPreset
  toastProps: Toast
}

const presets = {
  error: styles.error,
  success: styles.success,
  warning: styles.warning,
  info: styles.info,
}

const ForToast = (props: ForToastProps) => {
  const { title, preset, toastProps } = props
  return (
    <div className={`${styles.container} ${presets[preset]}`}>
      <p>{title}</p>
      <button onClick={() => toast.remove(toastProps.id)}>OK</button>
    </div>
  )
}

export default ForToast
