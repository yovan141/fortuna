import LoginForm from "@/components/LoginForm/LoginForm"
import styles from "./PWALoginView.module.scss"
import Image from "next/image"
import Logo from "./../../../assets/logo.png"

const PWALoginView = () => {
    return (
        <div className={styles.pwaLoginView}>
            <div className={styles.loginFormContainer}>
                <Image src={Logo} alt="logo" />
                <LoginForm />
            </div>
        </div>
    )
}

export default PWALoginView