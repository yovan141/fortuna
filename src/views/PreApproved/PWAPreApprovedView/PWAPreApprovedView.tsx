import PreApprovedCard from "@/components/PreApproved/PreApprovedCard/PreApprovedCard"
import { IPreApproved } from "@/models/preapproved"
import ForModal from "@/components/Shared/ForModal/ForModal"
import styles from "./PWAPreApprovedView.module.scss"
import InviteClientForm from "@/components/PreApproved/InviteClienForm/InviteClientForm"
import ForButton from "@/components/Shared/ForButton/ForButton"
import ForDotLoader from "@/components/Shared/ForDotLoader/ForDotLoader"

interface IPWAPreApprovedView {
    requests?: IPreApproved[]
    onSubmit: (v: any) => void
    show: boolean
    setShow: (v: boolean) => void
    sendInvitationLoading: boolean
    isLoading: boolean
}

const PWAPreApprovedView = (props: IPWAPreApprovedView) => {
    const { requests, onSubmit, setShow, show, sendInvitationLoading, isLoading } = props
    return (
        <div className={styles.pwaPreApprovedView}>
            <h1>
                Nuevas solicitudes
            </h1>
            <ForButton
                type="button"
                onClick={() => setShow(true)}
                label="Invitar clienta"
                preset="primary"
                icon="plus"
            />
            <div className={styles.requests}>
                {
                     isLoading ?
                     <ForDotLoader />
                     :
                    requests && requests.map((request, index) => 
                        <PreApprovedCard key={index} request={request}/>
                    )
                }
            </div>
            <ForModal show={show} setShow={setShow}>
                <InviteClientForm onSubmit={onSubmit} isLoading={sendInvitationLoading}/>
            </ForModal>
        </div>
    )
}

export default PWAPreApprovedView