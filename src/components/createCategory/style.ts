import Styled from 'styled-components'
import { theme } from '../../styles/theme'


export const Container = Styled.div`
display: flex;
flex-direction: column;

form{
    display: flex;
    flex-direction: column;

    > div{
    display: grid;
    grid-template-columns: 80% auto;
    grid-gap: 0.500rem;
    }
}
`


export const InputGroup = Styled.div`
display: flex;
flex-direction: column;
`;


export const ButtonGroup = Styled.div`
display: flex;
align-items: center;
padding: 0.500rem;
gap: 1rem;
`

export const ErrorMessage = Styled.span`
font-size: 0.525rem;
line-height: 1rem;
color: ${theme.colors.error};
min-height: 15px;
`