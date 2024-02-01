import { FortIconName } from "@/models/fortune.models"
import ForSpinnerLoader from "../ForSpinnerLoader/ForSpinnerLoader"
import styles from "./ForButton.module.scss"
import ForIcon from "../ForIcon/ForIcon"

interface IForButton {
    icon?: FortIconName
    label?: string
    type: "submit" | "reset" | "button" | undefined
    preset?: "primary" | "secondary"
    isLoading?: boolean,
    onClick?: () => void
}

const ForButton = (props: IForButton) => {

    const {type, icon, label, preset, isLoading = false, onClick } = props

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${styles.forButton} ${preset === 'primary' && styles.primary} ${preset === 'secondary' && styles.secondary}`}
        >
            { isLoading && <ForSpinnerLoader /> }
            <span>
                {icon && <ForIcon name={icon} size="sm"/>}
                {label && label}
            </span>
        </button>
    )
}

export default ForButton