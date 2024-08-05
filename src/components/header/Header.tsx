import styled from 'styled-components'
import Container from '../../styles/Container'
import { ReactComponent as Logo } from '../../assets/logos/BotHub.svg'
import { ReactComponent as DropDownIcon } from '../../assets/icons/DropDonwMenuIcon.svg'
import { ReactComponent as LangIcon } from '../../assets/icons/LangIcon.svg'

const HeaderContainer = styled.header`
    width: 100%;
    top: 0;
    left: 0;
    background-color: #121825;
    color: #FFFFFF;
    height: 80px;
    border: 1px solid #222B44;
    position: sticky;
    z-index: 1000;
    opacity: .95;
    transition: opacity ease .3s;

    &:hover {
        opacity: 1;
    }
`

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`

const NavBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Divider = styled.div`
    border-left: 1px solid rgba(34, 43, 68, 1);
    height: 34px;
    margin-left: 24px;
    
    @media (max-width: 769px) {
        display: none;
    } 
`

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    gap: 34px;
    margin-left: 24px;
    font-weight: 600;

    @media (max-width: 820px) {
        display: none;
    }
`

const DopDownMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
    cursor: pointer;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const AuthBar = styled.div`
    display: flex;
    flex-direction: row;
    gap: 34px;
`

const LocalisationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    cursor: pointer;
`

const AuthButton = styled.button`
    position: relative;
    padding: 10px 18px;
    border-radius: 8px;
    background-color: #1C64F2;
    color: #FFFFFF;
    cursor: pointer;
    border: none;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 1px;
    transition: background-color ease .3s;
    

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        background: linear-gradient(to top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
        pointer-events: none;
        border-radius: 8px;
    }

    &:hover {
        background-color: #1453ba;
    }

    &:active {
        background-color: #0e3c8a;
    }

    @media (max-width: 769px) {
        display: none;
    } 
`

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <HeaderContent>
          <NavBarContainer>
            <Logo width={ 97 } height={ 29 }/>
            <Divider/>
            <NavBar>
              <DopDownMenu>
                Продукты <DropDownIcon/>
              </DopDownMenu>
              <Links>Пакеты</Links>
              <Links>API</Links>
              <Links>Блог</Links>
            </NavBar>
          </NavBarContainer>
          <AuthBar>
            <LocalisationContainer>
              <LangIcon width={ 18 } height={ 18 }/>
              RU
              <DropDownIcon/>
            </LocalisationContainer>
            <AuthButton>
              Авторизация
            </AuthButton>
          </AuthBar>
        </HeaderContent>
      </Container>
    </HeaderContainer>
  )
}

export default Header