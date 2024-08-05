import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        flex-direction: column;
        font-family: "IBM Plex Sans", sans-serif;
        font-weight: 400;
        font-style: normal;
        color: #FFFFFF;
        background-color: #0E0C15;
    }
    
    html,
    body, 
    :root {
        height: 100%;
        width: 100%;
    }
    
    :root {
        //--bothub-scale: 0.9;
    }
`

export default GlobalStyles