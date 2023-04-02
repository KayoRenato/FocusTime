import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['gray-500']};
}

body{
 background: ${(props) => props.theme['gray-900']};
 color: ${(props) => props.theme['gray-300']};
}

html, body, #root{
    height: 100%;
}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

@media (max-width: 768px) and (max-height: 500px) {
    header {
        max-height: 3rem;
        padding: 0;
    }

    html {
        font-size: 87.5%;
    }
}


`
