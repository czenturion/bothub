import Container from '../styles/Container'
import styled from 'styled-components'
import HomeTitleBlock from '../components/home-title-block/HomeTitleBlock'
import HomeChatGPTAbilities from '../components/home-chatgpt-abilities/HomeChatGPTAbilities'

const HomeContainer = styled(Container)`
    margin-top: 120px;
`

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitleBlock/>
      <HomeChatGPTAbilities/>
    </HomeContainer>
  )
}

export default Home