import ForButton from "../Shared/ForButton/ForButton"
import ForTextInput from "../Shared/ForTextInput/ForTextInput"
import styles from "./LoginForm.module.scss"
import withForTextInput from "@/hocs/withFortTextInput"
import { FormProvider, useForm } from "react-hook-form"

const ForTextInputH = withForTextInput(ForTextInput)
interface ILoginForm {
    onSubmit: (v: any) => void
}

const LoginForm = (props: ILoginForm) => {
    const {onSubmit} = props
    const methods = useForm({
        mode: "onChange"
    })
    const {control, handleSubmit} = methods
    return (
        <FormProvider {...methods}>
            <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
                <ForTextInputH id="user" name="user" label="Usuario" placeholder="Usuario" type="text" control={control}/>
                <ForTextInputH id="password" name="password" label="Contraseña" placeholder="Contraseña" type="password" control={control}/>
                <ForButton type="submit" label="Iniciar Sesion" preset="primary"/>
            </form>
        </FormProvider>
    )
}

export default LoginForm