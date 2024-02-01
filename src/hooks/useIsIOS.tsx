import { isIOSView } from "@/utils/helpers/helpers"
import { useMemo } from "react"

export default function useIsIOS() {
    const isIOS = useMemo(() => isIOSView(), [])
    return isIOS
}