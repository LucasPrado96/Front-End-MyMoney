import { ReactNode } from 'react'
import {Root, Content, Trigger, Portal, Overlay} from './style'


type DialogProps ={
    children: ReactNode
    trigger: JSX.Element
    open?: boolean 
    onOpenChange?: (open: boolean) => void
}

export function Dialog({ children, trigger, open, onOpenChange}: DialogProps){
    return (
        <Root open={open} onOpenChange={onOpenChange}>
            <Trigger>{trigger}</Trigger>
                <Portal>
                    <Overlay></Overlay>
                    <Content>{children}</Content>
                </Portal>
        </Root>
    )
}