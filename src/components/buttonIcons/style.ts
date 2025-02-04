import Styled from "styled-components";
import { theme } from "../../styles/theme";

export const Button = Styled.button`
display: flex; 
align-items: center;
justify-content: center;
height: 2rem;
width: 4rem;
background-color: ${theme.colors.primary};
border-radius: 0.25rem;
padding: 0;
border: 0;
transition: all 100ms;

svg{
    fill: ${theme.colors.black};
    width: 2rem;
    height: 1.25rem;

   
}

&:hover{
        background-color: ${theme.colors.primaryHover} ;
    
    }
`