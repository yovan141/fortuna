import PreApprovedCard from "@/components/PreApproved/PreApprovedCard/PreApprovedCard"
import { IPreApproved } from "@/models/preapproved"
import ForModal from "@/components/Shared/ForModal/ForModal"
import { useState } from "react"
import styles from "./PWAPreApprovedView.module.scss"
import InviteClientForm from "@/components/PreApproved/InviteClienForm/InviteClientForm"
import ForDotLoading from "@/components/Shared/ForDotLoader/ForDotLoader"
import ForButton from "@/components/Shared/ForButton/ForButton"

interface IPWAPreApprovedView {
    requests?: IPreApproved[]
    onSubmit: (v: any) => void
    show: boolean
    setShow: (v: boolean) => void
}

const PWAPreApprovedView = (props: IPWAPreApprovedView) => {
    const { requests, onSubmit, setShow, show, } = props
    return (
        <div className={styles.pwaPreApprovedView}>
            <h1>
                Nuevas Solicitudes
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
                    requests && requests.map((request, index) => 
                        <PreApprovedCard key={index} request={request}/>
                    )
                }
            </div>
            <ForModal show={show} setShow={setShow}>
                <InviteClientForm onSubmit={onSubmit}/>
            </ForModal>
        </div>
    )
}

export default PWAPreApprovedView