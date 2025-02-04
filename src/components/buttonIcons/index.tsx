import { ComponentProps, forwardRef } from "react"
import { Button } from "./style"
import { MagnifyingGlass } from "@phosphor-icons/react"



type ButtonProps = ComponentProps<'button'> & {
 
}



export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonProps>(function(
    { ...props}, ref){

    return(
        <Button ref={ref} {...props}>
         <MagnifyingGlass/>
        </Button>
    )
})