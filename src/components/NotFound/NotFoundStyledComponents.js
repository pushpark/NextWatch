import styled from 'styled-components'

export const NotFoundBigContainer = styled.div`
  background-color: ${props => (props.lightMode ? '#ffffff' : '#313131')};
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const NotFoundContent = styled.div`
  padding: 25px;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.lightMode ? '#f9f9f9 ' : '#181818')};
  @media screen and (max-width: 766px) {
    width: 100vw;
    padding: 0px;
    padding-top: 15px;
    height: 90vh;
  }
`
export const NotFoundImage = styled.img`
  width: 380px;
  height: 300px;
  margin-top: 40px;
  @media screen and (max-width: 575px) {
    width: 280px;
    height: 245px;
    margin-top: 20px;
  }
`
export const NotFoundHeading = styled.h1`
  color: ${props => (props.lightMode ? '#383838' : '#ffffff')};
  font-family: roboto;
  font-size: 35px;
  line-height: 1.5;
  margin: 0px;
  margin-top: 15px;
  font-weight: 500;
  text-align: center;
  @media screen and (max-width: 575px) {
    font-size: 17px;
    font-weight: 600;
  }
`
export const NotFoundText = styled.p`
  color: ${props => (props.lightMode ? '#424242' : '#94a3b8')};
  font-family: roboto;
  font-size: 18px;
  line-height: 1.5;
  margin: 0px;
  margin-top: 10px;
  text-align: center;
  @media screen and (max-width: 575px) {
    font-size: 12px;
    margin-top: 8px;
    width: 70%;
  }
`
