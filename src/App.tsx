import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'
import NotFound from './pages/NotFound'
import styled from 'styled-components'


const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
`

const ContentContainer = styled.main`
    position: relative;
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

const App = () => {
  return (
    <AppContainer>
      <GlobalStyles/>
      <Header/>
      <ContentContainer>
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
