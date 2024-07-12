import styled from 'styled-components'

const Container = styled.div`
    max-width: 1290px;
    margin: 0 auto;
    padding: 0;
    height: 100%;

    @media (max-width: 1310px) {
        max-width: 754px;
    }

    @media (max-width: 769px) {
        max-width: 343px;
    }
`

export default Container