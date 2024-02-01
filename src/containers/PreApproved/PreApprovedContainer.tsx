import useIsPWAView from "@/hooks/useIsPWAView"
import PWAPreApprovedView from "@/views/PreApproved/PWAPreApprovedView/PWAPreApprovedView"
import preapproved from "./../../utils/mocks/preapproved.json"

const PreApprovedContainer = () => {
    const isPWAView = useIsPWAView()

    return isPWAView ?
        <PWAPreApprovedView {...preapproved}/>
        : 
        <></>
}

export default PreApprovedContainer