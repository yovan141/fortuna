import LoginForm from "@/components/LoginForm/LoginForm"
import styles from "./PWALoginView.module.scss"
import Image from "next/image"
import Logo from "./../../../assets/logo.png"
import ForIcon from "@/components/Shared/ForIcon/ForIcon"

interface IPWALoginView {
    onSubmit: (v: any) => void
}

const PWALoginView = (props: IPWALoginView) => {
    return (
        <div className={styles.pwaLoginView}>
            <div className={styles.loginFormContainer}>
                <div className={styles.logo}>
                    <ForIcon name="fortuna" size="lg"/>
                    <h1>FORTUNA</h1>
                </div>
                <LoginForm onSubmit={props.onSubmit}/>
            </div>
        </div>
    )
}

export default PWALoginView