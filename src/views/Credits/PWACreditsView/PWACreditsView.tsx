import CreditCard from "@/components/Credits/CreditCard/CreditCard"
import { ICredit } from "@/models/credit.models"
import styles from './PWACreditsView.module.scss'
import ForDotLoader from "@/components/Shared/ForDotLoader/ForDotLoader"

interface IPWACreditsView {
    credits?: ICredit[],
    isLoading: boolean
}

const PWACreditsView = (props: IPWACreditsView) => {
    const { credits, isLoading } = props
    return (
        <div className={styles.pwaCreditsView}>
            <h1>
                Creditos
            </h1>
            <div>
                {
                    isLoading ?
                    <ForDotLoader />
                    :
                    credits !== undefined && credits.map((credit, index) => 
                        <CreditCard key={index} {...credit}/>
                    )
                }

            </div>
        </div>
    )
}

export default PWACreditsView