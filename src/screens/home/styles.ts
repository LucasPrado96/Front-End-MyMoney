import Styled from 'styled-components'
import { theme } from '../../styles/theme'

export const HeaderContent = Styled.header`
display: flex; 
justify-content:space-between; 
align-items: center;
height: 4rem;
width: 100%;



.box2{
    display: flex;
    gap: 0.5rem;
}
`


export const Main = Styled.main`
display: flex;
gap: 0.60rem;
width: 100%;

`
export const Section = Styled.section`
display: flex;
flex-direction: column;
gap: 0.75rem
width: 100%;
`


export const Filters = Styled.div`
display: flex;
align-items: center;
width: 100%;
gap: 19rem;
justify-content: space-between;




`

export const InputGroup = Styled.div`
display: flex;
align-items: flex-end;
max-width: 22.5rem; 
width: 100%;
gap: 0.300rem;
`


export const Balance = Styled.div`
display: flex;
align-items: center;
gap: 0.650rem;
width: 100%;

`

export const ChartContainer = Styled.div`
background-color: ${theme.colors.dark};
margin-top: 10px;
border-radius: 0.25rem;
display: flex;
flex-direction: column;

header{
    padding: 0.600rem;
    display: flex;
    justify-content: space-between;
}
`
export const ChartContent = Styled.div`
background-color: ${theme.colors.dark};
height: 9rem;
border-radius: 0.25rem;
padding: 0.500rem;
margin-top: 0.500rem;

`

export const InputChartDiv = Styled.div`
display: flex;
align-items: flex-end;
width: 6.5rem;
gap: 0.25rem;
`



export const Aside = Styled.aside`
width: 31%;
background-color: ${theme.colors.dark};
border-radius: 0.25rem;
padding: 0.600rem;


header{
    display: flex;
    flex-direction: column;
}

`

export const TransactionsInputs = Styled.div`
display: flex;
align-items: end;
justify-content: space-between;
padding: 0.600rem 0;
gap: 0.300rem;

`

export const TransactionGroup = Styled.div`
height: 28.5rem;
overflow-y: auto;
overflow-x: hidden;


&::-webkit-scrollbar {
  width: 5px;
}

&::-webkit-scrollbar-track {
  background-color: ${theme.colors.black};
  border-radius: 4px;
}
`