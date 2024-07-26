import styled from 'styled-components'
import React from 'react'
import GridBackground from '../../assets/GridBackground.svg'


const ChatGPTStageContainer = styled.div`
    width: 100%;
    height: 100%;
    
`

const BackContainer = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image: url(${GridBackground});
    background-position: center center;
    background-repeat: repeat-x;
    background-size: cover;
    opacity: .35;
    z-index: -3;
`

const GettingStartButton = styled.button`
    width: 172px;
    height: 52px;
    padding: 14px 24px;
    font-family: IBM Plex Sans, serif;
    font-weight: 500;
    border-radius: 8px;
    background-color: rgba(28, 100, 242, 1);
    border: none;
    font-size: 18px;
    color: white;
`



const HomeTitleBlock = () => {
  return (
    <ChatGPTStageContainer>
      <BackContainer></BackContainer>
      <div>
        <h1>ChatGPT: ваш умный помощник</h1>
        <p>Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном месте. Без VPN и абонентской платы. Создавайте
          контент, обрабатывайте данные и получайте ответы на вопросы через удобный интерфейс!</p>
        <GettingStartButton>Начать работу</GettingStartButton>
      </div>
      <div>

      </div>
    </ChatGPTStageContainer>
  )
}

export default HomeTitleBlock