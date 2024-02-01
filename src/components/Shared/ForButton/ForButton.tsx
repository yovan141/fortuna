import styles from "./ForButton.module.scss"

interface IForButton {
    icon?: string
    label?: string
    type: "submit" | "reset" | "button" | undefined
    preset?: "primary" | "secondary"
}

const ForButton = (props: IForButton) => {

    const {type, icon, label, preset } = props

    return (
        <button
            type={type}
            className={`${styles.forButton} ${preset === 'primary' && styles.primary} ${preset === 'secondary' && styles.secondary}`}
        >
            {label && label}
        </button>
    )
}

export default ForButton