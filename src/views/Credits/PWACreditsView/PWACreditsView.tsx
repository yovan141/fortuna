import CreditCard from "@/components/Credits/CreditCard/CreditCard"
import { ICredit } from "@/models/credit.models"
import styles from './PWACreditsView.module.scss'

interface IPWACreditsView {
    credits?: ICredit[]
}

const PWACreditsView = (props: IPWACreditsView) => {
    const { credits } = props
    return (
        <div className={styles.pwaCreditsView}>
            <h1>
                Creditos
            </h1>
            <div>
                {
                    credits !== undefined && credits.map(credit => 
                        <CreditCard {...credit}/>
                    )
                }

            </div>
        </div>
    )
}

export default PWACreditsView