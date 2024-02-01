import styles from "./ForTextInput.module.scss"

interface IForTextInput {
    placeholder: string
    label: string
    name: string
    id: string
    type: "text" | "password"
}

const ForTextInput = (props: IForTextInput) => {

    const {placeholder, label, id, name, type, } = props

    return (
        <div className={styles.forTextInput}>
            {label && <label htmlFor="">{label}</label>}
            <input 
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
            />
        </div>
    )
}

export default ForTextInput