import styled from 'styled-components'
import './GlobalStyles'

const Container = styled.div`
    max-width: calc(var(--bothub-scale, 1) * 1370px);
    margin: 0 auto;
    padding: 0 calc(var(--bothub-scale, 1) * 40px);
    height: 100%;
`

export default Container