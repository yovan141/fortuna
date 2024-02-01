import { useState } from "react"
import { ICredit } from "@/models/credit.models"
import styles from "./CreditCard.module.scss"

const CreditCard = (credit: ICredit) => {
    const [active, setActive] = useState(false)
    return (
        <button onClick={() => setActive(active => !active)} className={`${styles.creditCardContainer} ${credit.cv === 0 ? styles.aware : (credit.cv > 1 && credit.cv < 6) ? styles.late : credit.cv > 5  ? styles.superLate : ''}`}>
            <div className={styles.infoContainer}>
                <div className={styles.avatar}>
                    <span>
                        {credit.name.split(" ").map(text => text.substring(0,1))}
                    </span>
                </div>
                <div className={styles.info}>
                    <span className={styles.creditId}>
                        ID: {credit.creditId}
                    </span>
                    <span className={styles.name}>
                        {credit.name}
                    </span>
                    <span>
                        Marca: {credit.brand}
                    </span>
                    <span>
                        Monto: ${credit.amount}
                    </span>                
                    <span>
                        Pagos: {credit.currentTerm}/{credit.term}
                    </span>
                    <span>
                        Pago: ${credit.paymentAmmount}
                    </span>
                </div>
            </div>
            {credit.payments && <div className={`${styles.moreInformation} ${active ? styles.active : ""}`}>
                <h4>Pagos</h4>
                <table>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Monto</td>
                            <td>Fecha</td>
                            <td>Estatus</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            credit.payments.map( (payment, index) => 
                                <tr key={index}>
                                    <td>
                                        {index+1}
                                    </td>
                                    <td>
                                       $ {payment.amount}
                                    </td>
                                    <td>
                                        {payment.date}
                                    </td>
                                    <td>
                                        <span className={`${payment.statusCode === 1 ? styles.pending : payment.statusCode === 2 ? styles.complete : ""}`}>
                                            {payment.status} 
                                        </span>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>}
        </button>
    )
}

export default CreditCard