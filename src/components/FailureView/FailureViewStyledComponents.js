import styled from 'styled-components'

export const FailureContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 340px;
  height: 300px;
  margin-top: 40px;
  @media screen and (max-width: 575px) {
    width: 200px;
    height: 165px;
    margin-top: 40px;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => (props.lightMode ? '#383838' : '#ffffff')};
  font-family: roboto;
  font-size: 23px;
  line-height: 1.5;
  margin: 0px;
  margin-top: 25px;
  text-align: center;
  font-weight: 500;
  @media screen and (max-width: 575px) {
    font-size: 20px;
  }
`
export const FailureText = styled.p`
  color: ${props => (props.lightMode ? '#475569' : '#94a3b8')};
  font-family: roboto;
  font-size: 18px;
  line-height: 1;
  margin: 0px;
  margin-top: 15px;
  text-align: center;
  @media screen and (max-width: 575px) {
    font-size: 16px;
    width: 85%;
  }
`
export const RetryButton = styled.button`
  width: 90px;
  height: 38px;
  color: #ffffff;
  background-color: #4f46e5;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  margin-top: 25px;
  font-family: roboto;
  margin-bottom: 30px;
`
