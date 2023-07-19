import styled from 'styled-components'

export const GamingBigContainer = styled.div`
  background-color: ${props => (props.lightMode ? '#ffffff' : '#313131')};
`
export const GamingContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const GamingContent = styled.div`
  width: 80vw;
  background-color: ${props => (props.lightMode ? '#f9f9f9 ' : '#181818')};
  @media screen and (max-width: 766px) {
    width: 100vw;
    padding: 0px;
  }
`
export const GamingBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 120px;
  background-color: ${props => (props.lightMode ? '#f1f1f1' : '#212121')};
  @media screen and (max-width: 766px) {
    height: 80px;
  }
`
export const GamingImage = styled.div`
  width: 80px;
  height: 80px;
  padding: 23px;
  font-size: 32px;
  margin-left: 40px;
  margin-right: 20px;
  border-radius: 40px;
  background-color: ${props => (props.lightMode ? '#e2e8f0' : ' #181818')};
  color: ${props => (props.lightMode ? '#ff0000' : '#ff0000')};
  @media screen and (max-width: 766px) {
    width: 50px;
    height: 50px;
    padding: 10px;
    font-size: 28px;
    margin-left: 15px;
    margin-right: 10px;
    border-radius: 30px;
  }
`
export const GamingText = styled.h1`
  color: ${props => (props.lightMode ? '#212121' : '#ffffff')};
  @media screen and (max-width: 766px) {
    font-size: 20px;
  }
`

export const VideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 0px;
  padding-top: 30px;
  @media screen and (max-width: 575px) {
    padding-top: 15px;
  }
`
export const VideoCard = styled.li`
  width: 240px;
  margin: 10px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    width: 40vw;
    margin: 5px;
    margin-bottom: 30px;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
`
export const VideoName = styled.p`
  color: ${props => (props.lightMode ? '#383838' : '#ffffff')};
  font-family: roboto;
  font-size: 15px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 5px;
`
export const VideoViews = styled(VideoName)`
  color: ${props => (props.lightMode ? '#616e7c' : '#94a3b8')};
  font-weight: 400;
  margin-top: 0px;
`

export const LoaderDiv = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`
