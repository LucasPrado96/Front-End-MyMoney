import { theme } from '../../styles/theme'
import Styled, { css } from 'styled-components'


type ContainerProps = {
    $variant: 'default' | 'outline'
}

export const ButtonInn = Styled.button<ContainerProps>`
width: 180px;
height: 2.25rem;
background-color: ${props => props.$variant === 'default' ? theme.colors.primary : 'transparent'};
color: ${props => props.$variant === 'default' ? theme.colors.black : theme.colors.primary};
border-radius: 8px;
transition: 200ms;
font-weight: 500;

${props => props.$variant === 'default' &&  css`
    border: 1px solid ${theme.colors.primary};
`}

${props => props.$variant === 'outline' &&  css`
    border: 1px solid ${theme.colors.primary};
`}


&:hover{
    background-color: ${theme.colors.primaryHover};
}
`

