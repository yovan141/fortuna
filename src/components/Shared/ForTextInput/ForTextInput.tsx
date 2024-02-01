import styles from "./ForTextInput.module.scss"

export interface IForTextInput {
    placeholder: string
    label: string
    name: string
    id: string
    type: "text" | "password"
    value: string
    error?: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onBlur: React.FocusEventHandler<HTMLInputElement>
    className?: string
}

const ForTextInput = (props: IForTextInput) => {

    const {placeholder, label, id, name, type, onBlur, onChange, value, className, error } = props

    return (
        <div className={styles.forTextInput}>
            {label && <label htmlFor="">{label}</label>}
            <input 
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
            />
        </div>
    )
}

export default ForTextInput