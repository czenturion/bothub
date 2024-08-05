import styled from 'styled-components'
import React from 'react'
import GridBackground from '../../assets/GridBackground.svg'


const ChatGPTContainer = styled.div`
    width: 100%;
    height: 100vh;
    max-height: 593px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media (min-width: 1060px) {
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media (max-width: 1060px) {
        
        p {
            text-align: justify;
        }
    }
`

const BackContainer = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-image: url(${GridBackground});
    background-position: center top;
    background-repeat: repeat-x;
    opacity: .35;
    z-index: -3;
`

const Title = styled.div`
    flex: 0 1 calc(50% - 30px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media (min-width: 1060px) {
        max-width: 525px;
        justify-content: center;
    }
    
    :last-child {
        margin-top: 22px;
    }
`

const TitleTitle = styled.h1`
    font-weight: 700;
    font-size: 46px;
    line-height: 60px;
`

const TitleText = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
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

const ChatGPTWindow = styled.div`
    flex: 0 1 calc(50% - 30px);
    height: 100vh;
    max-height: 592px;
    width: 100%;
    max-width: 741px;
    background-color: rgba(18, 24, 37, 1);
    border-radius: 24px;
    
    @media (max-width: 1060px) {
        max-width: none;
    }
`

const ChatGPTWindowHeader = styled.div`
    display: flex;
    flex-direction: row;
    height: 82px;
    padding: 16px 24px 16px 24px;
`


const HomeTitleBlock = () => {
  return (
    <ChatGPTContainer>
      <Title>
        <BackContainer />
        <TitleTitle>ChatGPT: ваш умный помощник</TitleTitle>
        <TitleText>Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном месте. Без VPN и абонентской платы. Создавайте
          контент, обрабатывайте данные и получайте ответы на вопросы через удобный интерфейс!</TitleText>
        <GettingStartButton>Начать работу</GettingStartButton>
      </Title>
      <ChatGPTWindow>
        <ChatGPTWindowHeader></ChatGPTWindowHeader>
      </ChatGPTWindow>
    </ChatGPTContainer>
  )
}

export default HomeTitleBlock