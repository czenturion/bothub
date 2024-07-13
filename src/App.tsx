import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'
import NotFound from './pages/NotFound'
import styled from 'styled-components'
import { ReactComponent as GridBackground } from './assets/GridBackground.svg'
import Container from './styles/Container'

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const ContentContainer = styled.div`
    flex: 1;
    display: flex;      
    flex-direction: column;
    height: 100%;
`

const ContentPages = styled.div`
    flex: 1;
    position: relative;
    width: 100%;
    height: 100%;
`

const Background = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    overflow: hidden;
    width: 100vw;
    height: 100%;
`

const BackContainer = styled.div`
    margin: 0 auto;
`

const App = () => {
  return (
    <AppContainer>
      <Background>
        <BackContainer>
          <GridBackground/>
        </BackContainer>
      </Background>
      <ContentContainer>
        <GlobalStyles/>
        <Header/>
        <ContentPages>
          <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="*" element={ <NotFound/> }/>
          </Routes>
        </ContentPages>
      </ContentContainer>
      <Footer/>
    </AppContainer>
  )
}

export default App
