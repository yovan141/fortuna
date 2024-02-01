import { FortIconName } from "@/models/fortune.models"
import Price from "./../../../assets/icons/usd-circle.svg"
import PreApproved from "./../../../assets/icons/assept-document.svg"
import Renewal from "./../../../assets/icons/sack-dollar.svg"
import Help from "./../../../assets/icons/interrogation.svg"
import Trophy from "./../../../assets/icons/trophy.svg"
import Luca from "./../../../assets/icons/luca.svg"
import Fortuna from "./../../../assets/fortuna_logo.png"
import Image, { StaticImageData } from "next/image"
import styles from './ForIcon.module.scss'

const Icons: { [key in FortIconName]: StaticImageData} = {
    "price": Price,
    "pre-approved": PreApproved,
    "renewal": Renewal,
    "help": Help,
    "trophy": Trophy,
    "luca": Luca,
    "fortuna": Fortuna

}

interface IForIcon {
    name: FortIconName
    size: "sm" | "md" | "lg"
}

const ForIcon = (props: IForIcon) => {

    const { name, size } = props
    return (
        <Image 
            src={Icons[name]}
            alt={name}
            className={`
                ${styles.fortIcon}    
                ${size === "sm" && styles.sm} 
                ${size === "md" && styles.md} 
                ${size === "lg" && styles.lg}
            `} 
        />
    )
}

export default ForIcon