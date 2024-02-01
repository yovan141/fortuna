"use client"
import useIsPWAView from "@/hooks/useIsPWAView"
import PWAMainLayout from "@/layouts/PWA/PWAMainLayout/PWAMainLayout"
import { WithMainLayout } from "@/utils/enums/layouts"
import { usePathname } from "next/navigation"

interface ILayoutProvider {
    children: React.ReactNode
}

const LayoutProvider = (props: ILayoutProvider) => {
    const { children } = props
    const isPWAView = useIsPWAView()
    const pathName = usePathname()

    return pathName in WithMainLayout ? (
        isPWAView ?
        <PWAMainLayout>{children}</PWAMainLayout>
        :
        <div>
            Broser
        </div>
    ) : (
        <>{children} Broser</>
    )
}

export default LayoutProvider