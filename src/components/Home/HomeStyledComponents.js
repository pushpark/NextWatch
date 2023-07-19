import styled from 'styled-components'

export const HomeBigContainer = styled.div`
  background-color: ${props => (props.lightMode ? '#ffffff' : '#313131')};
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const HomeBody = styled.div`
  padding: 10px;
`
export const BannerContainer = styled.div`
  padding: 35px;
  width: 80vw;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  @media screen and (max-width: 766px) {
    width: 100vw;
    padding: 20px;
    margin-top: 20px;
  }
`
export const BannerLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const BannerLogo = styled.img`
  height: 35px;
  width: 150px;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #231f20;
  font-size: 18px;
`
export const BannerText = styled.p`
  font-family: roboto;
  font-size: 20px;
  color: #1e293b;
  width: 400px;
  line-height: 1.8;
  @media screen and (max-width: 766px) {
    width: 200px;
    font-size: 18px;
  }
`
export const BannerButton = styled.button`
  width: 120px;
  height: 40px;
  border: 1px solid #181818;
  color: #1e293b;
  font-family: Roboto;
  background-color: transparent;
  font-weight: 500;
  font-size: 14px;
`
export const HomeContent = styled.div`
  padding: 25px;
  width: 80vw;
  background-color: ${props => (props.lightMode ? '#f9f9f9 ' : '#181818')};
  @media screen and (max-width: 766px) {
    width: 100vw;
    padding: 0px;
    padding-top: 15px;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 2px;
  margin: 10px;
`
export const SearchInput = styled.input`
  width: 400px;
  height: 32px;
  padding-left: 10px;
  border: 1px solid ${props => (props.lightMode ? '#cccccc' : ' #424242')};
  background-color: ${props => (props.lightMode ? '#ffffff' : 'transparent')};
  color: ${props => (props.lightMode ? '#424242' : '#cccccc')};
  outline: none;
`
export const SearchButton = styled.button`
  width: 80px;
  height: 32px;
  border: 1px solid ${props => (props.lightMode ? '#cccccc' : ' #424242')};
  background-color: ${props => (props.lightMode ? '#ebebeb' : '#313131')};
  color: #606060;
  font-size: 14px;
`
export const VideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0px;
`
export const VideoCard = styled.li`
  width: 280px;
  margin: 10px;
  margin-bottom: 40px;
  @media screen and (max-width: 575px) {
    width: 100vw;
    margin: 0px;
    margin-bottom: 30px;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
`
export const VideoInnerCard = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`
export const ChannelLogo = styled.img`
  height: 40px;
  width: 40px;
  @media screen and (max-width: 575px) {
    height: 35px;
    width: 35px;
    margin-left: 5px;
  }
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const VideoName = styled.p`
  color: ${props => (props.lightMode ? '#383838' : '#ffffff')};
  font-family: roboto;
  font-size: 15px;
  line-height: 1.5;
  margin: 0px;
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
  color: ${props => (props.lightMode ? '#606060' : '#94a3b8')};
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
export const NoResultsContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NoResultsImage = styled.img`
  width: 380px;
  height: 300px;
  margin-top: 40px;
  @media screen and (max-width: 575px) {
    width: 200px;
    height: 165px;
    margin-top: 40px;
  }
`
export const NoResultHeading = styled.h1`
  color: ${props => (props.lightMode ? '#383838' : '#ffffff')};
  font-family: roboto;
  font-size: 25px;
  line-height: 1.5;
  margin: 0px;
  margin-top: 15px;
  text-align: center;
  @media screen and (max-width: 575px) {
    font-size: 20px;
  }
`
export const NoResultText = styled.p`
  color: ${props => (props.lightMode ? '#424242' : '#94a3b8')};
  font-family: roboto;
  font-size: 20px;
  line-height: 1.5;
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
  margin-top: 15px;
  font-family: roboto;
  margin-bottom: 30px;
`
export const LoaderDiv = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`
