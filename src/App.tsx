import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
