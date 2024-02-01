import ForIcon from "../ForIcon/ForIcon";
import styles from "./ForModal.module.scss"

interface IForModal {
    show: boolean;
    setShow: (v: boolean) => void
    children: React.ReactNode
}

const ForModal = (props: IForModal) => {
    const { show, setShow, children } = props
    return (
        show ? <div className={styles.container}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <button onClick={() => setShow(false)}>
                        <ForIcon name="close" size="md"/>
                    </button>
                </div>
                {children}
            </div>
        </div>
        :
        null
    )
}

export default ForModal