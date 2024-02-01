import ForIcon from "@/components/Shared/ForIcon/ForIcon"
import { MenuItem } from "@/models/fortune.models"
import { ROUTES } from "@/utils/enums/route.enum"
import { useCallback } from "react"
import styles from "./PWAMenu.module.scss"
import { useRouter } from "next/navigation"

const PWAMenuItems: MenuItem[] = [
    {
        title: "Creditos",
        enabled: true,
        icon: "price",
        route: ROUTES.credits
    },
    {
        title: "Pre-aprobados",
        enabled: true,
        icon: "pre-approved",
        route: ROUTES.preapproved
    },
    {
        title: "Renovaciones",
        enabled: true,
        icon: "renewal",
        route: ROUTES.renovations
    },
    {
        title: "Superate",
        enabled: true,
        icon: "trophy",
        route: ROUTES.renovations
    },
    {
        title: "TuBienestar",
        enabled: true,
        icon: "help",
        route: ROUTES.help
    }
]

const PWAMenu = () => {
    const router = useRouter()

    const handleMenuItem = useCallback((route: ROUTES) => {
        router.push(route)
    }, [])

    return (
        <div className={styles.pwaMenuContainer}>
            {
                PWAMenuItems.map((item) => 
                    <button type="button" key={item.route} onClick={() => handleMenuItem(item.route)}>
                        <ForIcon 
                            name={item.icon}
                            size="md"
                        />
                        {/* {item.title} */}
                    </button>
                )
            }
        </div>
    )
}

export default PWAMenu