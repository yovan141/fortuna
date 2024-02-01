import { useMemo } from "react";
import useWindowDimensions from "./useWindowDimensions";

export default function useIsPWAView() {
    const { width } = useWindowDimensions()
    const isMobile = useMemo(() => width < 768, [width])
    const isPWAView = useMemo(() => {
        return window !== undefined ? (
            window.matchMedia("(display-mode: standalone)").matches || 
            //@ts-ignore
            window.navigator.standalone
        ) : isMobile
    }, [isMobile])

    return isPWAView
}