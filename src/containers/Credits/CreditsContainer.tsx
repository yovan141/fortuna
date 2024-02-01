import useIsPWAView from "@/hooks/useIsPWAView"
import PWACreditsView from "@/views/Credits/PWACreditsView/PWACreditsView"
import credits from "./../../utils/mocks/clients.json"
import { useMutation } from "react-query"
import { getCredits } from "@/utils/requests/credits.requests"
import { useEffect } from "react"

const CreditsContainer = () => {
    const isPWAView = useIsPWAView()

    const { data, isLoading, mutate: getCreditsMutate } = useMutation(
        "getCredits",
        getCredits
    )

    useEffect(() => {
        getCreditsMutate()
    }, [getCreditsMutate])
    return isPWAView ? <PWACreditsView credits={data?.data.clients} isLoading={isLoading}/> : <></>
}

export default CreditsContainer