import ForButton from "@/components/Shared/ForButton/ForButton"
import ForTextInput from "@/components/Shared/ForTextInput/ForTextInput"
import styles from "./InviteClientForm.module.scss"
import { FormProvider, useForm } from "react-hook-form"
import withForTextInput from "@/hocs/withFortTextInput"

const ForTextInputH = withForTextInput(ForTextInput)

interface IInviteClienForm {
    onSubmit: (v: any) => void
}

const InviteClientForm = (props: IInviteClienForm) => {
    const {onSubmit} = props
    const methods = useForm({
        mode: "onChange"
    })
    const {control, handleSubmit} = methods
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.inviteClientForm}>
                <h1>Invitar clienta</h1>
                <div className={styles.inputs}>
                    <ForTextInputH type="text" name="name" label="Nombre" id="name" placeholder="Nombre" control={control}/>
                    <ForTextInputH type="text" name="phone" label="Telefono" id="phone" placeholder="Telefono" control={control}/>
                </div>
                <ForButton type="submit" label="Enviar" preset="primary"/>
            </form>
        </FormProvider>
    )
}

export default InviteClientForm