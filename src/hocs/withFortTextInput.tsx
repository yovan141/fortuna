import { IForTextInput } from "@/components/Shared/ForTextInput/ForTextInput"
import { Controller } from "react-hook-form"

interface ForTextInputHOCProps
  extends Omit<IForTextInput, "value" | "onChange" | "onBlur"> {
  name: string
  control: any
}

const withForTextInput = (
  WrappedComponent: (props: IForTextInput) => JSX.Element
) => {
  const WithTextInputController = (props: ForTextInputHOCProps) => {
    const { name, control } = props
    return (
      <Controller
        control={control}
        name={name}
        defaultValue={""}
        render={({ field, fieldState }) => {
          const fieldValue = field.value
          return (
            <WrappedComponent
              {...props}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={fieldState.error?.message}
              value={typeof fieldValue === "number" ? fieldValue.toString() : fieldValue}
            />
          )
        }}
      />
    )
  }
  return WithTextInputController
}

export default withForTextInput