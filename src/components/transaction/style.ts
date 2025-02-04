import Styled from 'styled-components'
import { theme } from '../../styles/theme'

type TransactionProps ={
    $variant: 'income' | 'expense';
    tagColor: string;
}

const VariantColorMap = {
    income: theme.colors.sucess,
    expense: theme.colors.error,
}

export const TransactionsContent = Styled.div`
display: flex;
flex-direction: column;

`

export const Transactions = Styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
padding: 0.300rem;
position: relative;


&::after {
    content: '';
    position: absolute;
    background-color: ${theme.colors.neutral};
    height: 1px;
    width: 15px;
    left: 50%;
    bottom: 0;
}
`

export const InfoRightSide = Styled.div<TransactionProps>`
 display: flex; 
 flex-direction: column;
 gap: 0.300rem;
 align-items: flex-end;

 strong{
    font-size: 1rem;
    font-weight: 600;
    color: ${props => VariantColorMap[props.$variant]};
}

span{
    font-size: 0.600rem;
    font-weight: 400;
    color: ${props => props.tagColor};
    border: 1px solid ${props => props.tagColor};
    padding: 0.100rem;
    text-align: center;
    
}
`

export const InfoLeftSide = Styled.div`
display: flex;
gap: 0.300rem;
align-items: flex-end;

div{
    display: flex; 
    flex-direction: column;
    gap: 0.300rem;
}

strong{
    font-size: 1rem;
    font-weight: 600;
    color: ${theme.colors.white};
}

span{
    font-size: 0.600rem;
    font-weight: 400;
    color: ${theme.colors.neutral};
}

`