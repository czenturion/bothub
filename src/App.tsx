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
    min-height: 100vh;
`

const ContentContainer = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
`

const ContentPages = styled.div`
    flex: 1;
    position: relative;
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
