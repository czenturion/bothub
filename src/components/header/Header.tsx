import styled from 'styled-components'
import Container from '../../styles/Container'
import { ReactComponent as Logo } from '../../assets/logos/BotHub.svg'

const HeaderContainer = styled.header`
    background-color: #121825;
    color: #FFFFFF;
    height: 80px;
    border: 1px solid #222B44;
`

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`

const NavBarContainer = styled.nav`
    display: flex;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <HeaderContent>
          <div>
            <Logo width={97} height={29} />
            <NavBarContainer>
              
            </NavBarContainer>
          </div>
          <div>
            auth
          </div>

        </HeaderContent>
      </Container>
    </HeaderContainer>
  )
}

export default Header