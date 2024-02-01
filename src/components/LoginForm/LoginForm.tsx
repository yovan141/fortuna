import ForButton from "../Shared/ForButton/ForButton"
import ForTextInput from "../Shared/ForTextInput/ForTextInput"
import styles from "./LoginForm.module.scss"

const LoginForm = () => {
    return (
        <form className={styles.loginForm}>
            <ForTextInput id="user" name="user" label="Usuario" placeholder="Usuario" type="text"/>
            <ForTextInput id="password" name="password" label="Contraseña" placeholder="Contraseña" type="password"/>
            <ForButton type="submit" label="Iniciar Sesion" preset="primary"/>
        </form>
    )
}

export default LoginForm