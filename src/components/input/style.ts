import Styled from "styled-components";
import { theme } from "../../styles/theme";

type ContainerProps = {
    $variant: 'black' | 'dark'
}

export const Container = Styled.div<ContainerProps>`
display: flex;
flex-direction: column;
gap: 0.125rem;
width: 100%;



label{
    color: ${theme.colors.white};
    font-size: 0.555rem; 
    line-height: 100%;

    
}

input{
    height: 2.00rem;
    background-color: ${props => theme.colors[props.$variant]};
    border: none;
    border-radius: 0.25rem;
    padding: 0 0.75rem;
    color: ${theme.colors.neutral};
    font-size: 0.75rem;
    width: 100%;
    border: 1px solid ${theme.colors.primaryHover};
    transition: 100ms;
    
    
    

    &:focus{
        border: 2px solid ${theme.colors.primary}
    }

    &::placeholder{
        color: ${theme.colors.neutral};
        font-size: 13px;
        font-weight: 300;
        opacity: 0.5;
    }
}

`