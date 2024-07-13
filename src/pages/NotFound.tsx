import styled from 'styled-components'
import Container from '../styles/Container'

const NotFoundContainer = styled.h1`
    text-transform: uppercase;
    margin-top: 120px;
    font-weight: 700;
`

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Container>
        <div>404</div>
        <div>Page Not Found</div>
      </Container>
    </NotFoundContainer>
  )
}

export default NotFound