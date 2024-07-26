import Container from '../styles/Container'
import styled from 'styled-components'
import HomeTitleBlock from '../components/home-title-block/HomeTitleBlock'

const HomeContainer = styled.div`
    margin-top: 120px;
`

const Home = () => {
  return (
    <HomeContainer>
      <Container>
        <HomeTitleBlock />
      </Container>
    </HomeContainer>
  )
}

export default Home