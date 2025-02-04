import Styled from "styled-components";
import { theme } from "../../styles/theme";


type ContainerProps = {
    $variant: 'expenses' | 'incomes' | 'balance'
}

const colorMaps = {
    expenses: theme.colors.error,
    incomes: theme.colors.sucess,
    balance: theme.colors.info
}

export const Container = Styled.div<ContainerProps>`
display: flex;
flex-direction:column;
background-color: ${theme.colors.dark};
border-radius: 0.25rem;
padding: 1rem;
gap: 0.1rem;
width: 100%;
margin-top: 10px;

svg{
    width: 1.20rem;
    height: 1.20rem;
    font-weight: 800;
    color: ${props => colorMaps[props.$variant]};
}

span{
    font-size: 0.700rem;
    font-weight: 400;
    color: ${theme.colors.white};
}

strong{
    font-weight: 800;
    font-size: 1rem;
    color: ${props => colorMaps[props.$variant]};
}

`