import Styled from "styled-components";
import { theme } from "../../styles/theme";
import { InputNumberFormat } from "@react-input/number-format";

export const Container = Styled.div`
display: flex;
flex-direction: column;

form{
    display: flex;
    flex-direction: column;
    gap: 0.500rem;

   
}
`;


export const ErrorMessage = Styled.span`
font-size: 0.525rem;
line-height: 1rem;
color: ${theme.colors.error};
min-height: 15px;

`



export const ButtonGroup = Styled.div`
display: flex;
align-items: center;
padding: 0.500rem;
gap: 1rem;

`;

export const InputGroup = Styled.div`
display: flex;
flex-direction: column;
label{
        color: ${theme.colors.white};
        font-size: 0.555rem; 
        line-height: 100%;
}

select{
    height: 2.00rem;
    background-color: ${theme.colors.black};
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
    }
}
`;

export const InputNumberMask = Styled(InputNumberFormat)`
    height: 2.00rem;
    background-color: ${theme.colors.black};
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
    }
`






export const RadioInputGroup = Styled.div`
display: flex;
flex-direction: column;
gap: 1rem;

`;


export const RadioGroupContent = Styled.div`
display: flex;
align-items: center;



label{
    font-size: 0.775rem;
    color: ${theme.colors.white};
    
}

input{
    width: 1rem;
    height: 1rem;
    accent-color: ${theme.colors.primary};
}

`;