import PreApprovedCard from "@/components/PreApproved/PreApprovedCard/PreApprovedCard"
import { IPreApproved } from "@/models/preapproved"
import styles from "./PWAPreApprovedView.module.scss"

interface IPWAPreApprovedView {
    requests: IPreApproved[]
}

const PWAPreApprovedView = (props: IPWAPreApprovedView) => {
    const { requests } = props
    return (
        <div className={styles.pwaPreApprovedView}>
            <h1>
                Nuevas Solicitudes
            </h1>
            <div>
                {
                    requests.map(request => 
                        <PreApprovedCard request={request}/>
                    )
                }
            </div>
        </div>
    )
}

export default PWAPreApprovedView