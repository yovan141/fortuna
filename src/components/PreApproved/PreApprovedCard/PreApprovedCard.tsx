import { useState } from "react"
import { IPreApproved } from "@/models/preapproved"
import styles from "./PreApprovedCard.module.scss"

interface IPreApprovedCard {
    request: IPreApproved
}

const PreApprovedCard = (props: IPreApprovedCard) => {
    const [active, setActive] = useState(false)
    const { request } = props
    return (
        <button type="button" onClick={() => setActive(active => !active)} className={`${styles.preApprovedCardContainer} ${request.statusCode === 1 ? styles.preapproved : request.statusCode === 3 ? styles.rejected : ""}`}>
            <div className={styles.infoContainer}>
                <div className={styles.avatar}>
                    <span>
                        {request.name.split(" ").map(text => text.substring(0,1))}
                    </span>
                </div>
                <div className={styles.info}>
                    <span className={styles.name}>
                        {request.name}
                    </span>
                    <span>
                        Marca: {request.brand}
                    </span>
                    <span>
                        Monto: ${request.amount}
                    </span>                
                    <span>
                        Plazo: {request.term}
                    </span>
                    <span>
                        Pago: ${request.paymentAmmount}
                    </span> 
                    <span className={styles.status}>
                        Estatus: {request.status}
                    </span>
                </div>
            </div>
            {request.reason && <div className={`${styles.moreInformation} ${active ? styles.active : ""}`}>
                {request.reason !== "" && <span className={styles.reason}>
                    Motivo: {request.reason}
                </span>}
            </div>}
        </button>
    )
}

export default PreApprovedCard