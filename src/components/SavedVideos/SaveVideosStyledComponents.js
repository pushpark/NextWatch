import styled from 'styled-components'

export const SaveVideosBigContainer = styled.div`
  background-color: ${props => (props.lightMode ? '#ffffff' : '#313131')};
`
export const SaveVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const SaveVideosContent = styled.div`
  width: 80vw;
  background-color: ${props => (props.lightMode ? '#f9f9f9 ' : '#0f0f0f')};
  @media screen and (max-width: 766px) {
    width: 100vw;
    padding: 0px;
  }
`
export const SaveVideosBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 120px;
  background-color: ${props => (props.lightMode ? '#f1f1f1' : '#212121')};
  @media screen and (max-width: 766px) {
    height: 80px;
  }
`
export const SaveVideosImage = styled.div`
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
export const SaveVideosText = styled.h1`
  color: ${props => (props.lightMode ? '#212121' : '#ffffff')};
  @media screen and (max-width: 766px) {
    font-size: 20px;
  }
`

export const VideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  padding-top: 30px;
  @media screen and (max-width: 575px) {
    padding-top: 15px;
  }
`
export const VideoCard = styled.li`
  width: 86%;
  margin: auto;
  margin-bottom: 80px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 0px;
    margin-bottom: 30px;
  }
`
export const Thumbnail = styled.img`
  width: 55%;
  @media screen and (max-width: 575px) {
    width: 55%;
  }
`
export const VideoInnerCard = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`
export const ChannelLogo = styled.img`
  height: 35px;
  width: 35px;
  margin: 8px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  padding: 5px;
  @media screen and (max-width: 575px) {
    margin-left: 3px;
  }
`
export const VideoName = styled.p`
  color: ${props => (props.lightMode ? '#383838' : '#ffffff')};
  font-family: roboto;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 500;
  margin: 0px;
  @media screen and (max-width: 575px) {
    font-size: 15px;
  }
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const VideoSubDetail = styled.p`
  color: ${props => (props.lightMode ? '#616e7c' : '#94a3b8')};
  font-family: roboto;
  font-size: 14px;
  line-height: 0.5;
  @media screen and (max-width: 575px) {
    display: none;
  }
`
export const VideoSubDetails = styled(VideoSubDetail)`
  font-size: 14px;
  display: flex;
  margin-top: 8px;
  @media screen and (max-width: 575px) {
    font-size: 13px;
  }
`
export const Dot = styled.div`
  font-size: 20px;
  color: ${props => (props.lightMode ? '#606060' : '#94a3b8')};
  align-self: center;
`
export const DesktopVideoDetails = styled(VideoDetails)`
  display: flex;
  margin-top: 0px;
  @media screen and (max-width: 575px) {
    display: none;
  }
`
export const NoSavedContainer = styled.div`
  margin: 10px;
  display: flex;
  height: 90vh;
  flex-direction: column;
  align-items: center;
`
export const NoSavedImage = styled.img`
  width: 420px;
  height: 340px;
  margin-top: 60px;
  @media screen and (max-width: 575px) {
    width: 260px;
    height: 200px;
    margin-top: 80px;
  }
`
export const NoSavedHeading = styled.h1`
  color: ${props => (props.lightMode ? '#383838' : '#ffffff')};
  font-family: roboto;
  font-size: 23px;
  line-height: 1.5;
  margin: 0px;
  margin-top: 20px;
  text-align: center;
  @media screen and (max-width: 575px) {
    font-size: 18px;
  }
`
export const NoSavedText = styled.p`
  color: ${props => (props.lightMode ? '#424242' : '#ffffff')};
  font-family: roboto;
  font-size: 18px;
  line-height: 1.5;
  margin: 0px;
  margin-top: 15px;
  text-align: center;
  @media screen and (max-width: 575px) {
    font-size: 15px;
    width: 85%;
  }
`
