import useIsPWAView from "@/hooks/useIsPWAView"
import PWAPreApprovedView from "@/views/PreApproved/PWAPreApprovedView/PWAPreApprovedView"
import preapproved from "./../../utils/mocks/preapproved.json"
import { getPreApproved, sendInvitation } from "@/utils/requests/preapproved.requests"
import { useMutation } from "react-query"
import { useEffect, useCallback, useState } from "react"

const PreApprovedContainer = () => {
    const isPWAView = useIsPWAView()
    
    const [ show, setShow ] = useState(false)

    const {data, isLoading, mutate: getPreApprovedMutate} = useMutation(
        "get-pre-approved",
        getPreApproved
    )

    const {data: sendInvitationData, isLoading: sendInvitationLoading, mutate: sendInvitationMutate} = useMutation(
        "send-invitation",
        sendInvitation,
        {
            onSuccess() {

            }
        }
    )

    const onSubmit = useCallback((v: any) => {
        sendInvitationMutate({
            destinationNumber: `52${v.phone}`,
            firstName: v.name,
            lastName: v.name,
            source: "Registration form test"
        })
    }, [sendInvitationMutate])


    useEffect(() => {
        getPreApprovedMutate()
    }, [getPreApprovedMutate])

    return isPWAView ?
        <PWAPreApprovedView {...data?.data} onSubmit={onSubmit} show={show} setShow={setShow}/>
        : 
        <></>
}

export default PreApprovedContainer