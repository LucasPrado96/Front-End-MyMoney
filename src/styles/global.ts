import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";


export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body{
    -web-font-smoothing: antialiased;
    background-color: ${theme.colors.black};
}

body, input,  button, select{
    font: 1rem 'Lexend', 'sans-serif';
    
} 


h1, h2, p, span, strong, label, button{
    line-height: 100%;
    color: ${theme.colors.white};
}

#root{
    max-width: 1200px;
    margin: 0 auto;

}


button{
    border: none;
    cursor: pointer;
}
`
