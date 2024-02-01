import styles from "./PWAPaymentsView.module.scss"

const PWAPaymentsView = () => {
    return (
        <div className={styles.pwaPaymentsView}>
            <h1>Pagos</h1>
            <div>
                <span>Proximamente...</span>
            </div>
        </div>
    )
}

export default PWAPaymentsView