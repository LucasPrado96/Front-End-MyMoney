import { ComponentProps, forwardRef } from "react"
import { ButtonInn } from "./style"

type ButtonProps = ComponentProps<'button'> & {
    variant?: 'default' | 'outline'
}



export const ButtonIn = forwardRef<HTMLButtonElement, ButtonProps>(function(
    {children, variant = 'default', ...props}, ref){

    return(
        <ButtonInn ref={ref} {...props} $variant={variant}>{children}</ButtonInn>
    )
})