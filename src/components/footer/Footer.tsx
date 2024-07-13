import Container from '../../styles/Container'
import styled from 'styled-components'

const FooterContainer = styled.header`
    position: relative;
    flex: 0 0 auto;
    overflow: hidden;
    background: #121825;
    color: #FFFFFF;
    border: 1px solid #222B44;
    z-index: 2;

    &::before {
        content: '';
        position: absolute;
        top: -250px;
        left: 50%;
        width: 1000px;
        height: 1000px;
        background: radial-gradient(circle, rgba(28,100,242,0.5) 0%, rgba(8,16,39,0) 70%);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        z-index: 0; 
    }
`


const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        Footer
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
      </Container>
    </FooterContainer>
  )
}

export default Footer