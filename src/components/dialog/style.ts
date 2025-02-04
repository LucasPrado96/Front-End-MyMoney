import Styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'
import { theme } from "../../styles/theme";


export const Root = Styled(Dialog.Root)`

`

export const Trigger = Styled(Dialog.Trigger)`
border: 0;
background-color: transparent;

`

export const Content = Styled(Dialog.Content)`
background-color: ${theme.colors.dark};
position: fixed;
padding: 1rem;
left: 50%;
top: 40%;
border-radius: 0.25rem;
max-width: 25rem;
width: 100%;
transform:  translate(-50%, -50%);
animation: contentshow 150ms;
display: flex;
flex-direction: column;
gap: 0.800rem;


div{
    display: flex;
    gap: 0.100rem;
}

@keyframes contentshow {
    from{
        opacity: 0;
        transform: translate(-50% -48%) scale(0.96);
    } to {
        opacity: 1;
        transform: translate(-50% -50%) scale(1);
    }
} 

` 

export const Overlay = Styled(Dialog.Overlay)`
background-color: rgba(0,0,0, 0.8);
position: fixed;
inset: 0;
animation: overlayShow 150ms;

@keyframes overlayShow {
    from {
        opacity: 0;
    } 
    to{
        opacity: 1;
    }
}
`

export const Portal = Styled(Dialog.Portal)`

`