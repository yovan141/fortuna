import LucaAssistant from "@/components/Shared/LucaAssistant/LucaAssistant"
import PWAMenu from "../PWAMenu/PWAMenu"
import styles from './PWAMainLayout.module.scss'
import ForIcon from "@/components/Shared/ForIcon/ForIcon"

interface IPWAMainLayout {
    children: React.ReactNode
}

const PWAMainLayout = (props: IPWAMainLayout) => {

    const { children } = props
    return (
        <div className={styles.pwaMainLayoutContainer}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <ForIcon  name="fortuna" size="lg"/>
                    <h1 className={styles.title}>
                        FORTUNA
                    </h1>
                </div>
                <button type="button">
                    MG
                </button>
            </div>
            <main>
                {children}
                <LucaAssistant />
            </main>
            <PWAMenu />
        </div>
    )
}

export default PWAMainLayout