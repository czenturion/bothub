import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "IBM Plex Sans", sans-serif;
        font-weight: 400;
        font-style: normal;
        color: #FFFFFF;
        background-color: #0E0C15;
    }
`

export default GlobalStyles