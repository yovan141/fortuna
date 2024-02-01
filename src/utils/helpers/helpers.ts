export const isIOSView = () => {
    return typeof window !== "undefined" ?
            [
                "iPad Simulator",
                "iPhone Simulator",
                "iPad",
                "iPhone"
            ].includes(navigator.platform) ||
            (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        :
            false
}