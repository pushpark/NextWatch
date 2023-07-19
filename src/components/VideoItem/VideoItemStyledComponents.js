import styled from 'styled-components'

export const VideoItemBigContainer = styled.div`
  height: 100%;
  background-color: ${props => (props.lightMode ? '#ffffff' : '#313131')};
`
export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoItemContent = styled.div`
  width: 80vw;
  background-color: ${props => (props.lightMode ? '#f9f9f9 ' : '#0f0f0f')};
  @media screen and (max-width: 766px) {
    width: 100vw;
    padding: 0px;
  }
`
export const VideoContainer = styled.div`
  padding: 30px;
  @media screen and (max-width: 575px) {
    padding: 8px;
  }
`
export const VideoDisplayContainer = styled.div`
  width: auto;
  height: 400px;
  @media screen and (max-width: 575px) {
    height: 200px;
  }
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
export const VideoName = styled.p`
  color: ${props => (props.lightMode ? '#212121' : '#ffffff')};
  font-family: roboto;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
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
export const ViewsAndTime = styled.p`
  color: ${props => (props.lightMode ? '#616e7c' : '#94a3b8')};
  font-family: roboto;
  font-size: 14px;
  line-height: 0.5;
  @media screen and (max-width: 575px) {
    font-size: 12px;
  }
`
export const LikeButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => {
    if (props.liked) {
      return '#2563eb'
    }
    if (props.lightMode) {
      return '#64748b'
    }
    return '#64748b'
  }};
  font-family: roboto;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  @media screen and (max-width: 575px) {
    margin-left: 0px;
    margin-right: 10px;
  }
`
export const DislikeButton = styled(LikeButton)`
  color: ${props => {
    if (props.disLiked) {
      return '#2563eb'
    }
    if (props.lightMode) {
      return '#64748b'
    }
    return '#64748b'
  }};
`
export const SaveButton = styled(LikeButton)`
  color: ${props => {
    if (props.saved) {
      return '#2563eb'
    }
    if (props.lightMode) {
      return '#64748b'
    }
    return '#64748b'
  }};
`
export const LikeAndSave = styled.p`
  margin-left: 5px;
  font-size: 16px;
  font-weight: 500;
  @media screen and (max-width: 575px) {
    font-size: 14px;
  }
`
export const VideoSubDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`
export const VideoSubDetailsInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
export const LoaderDiv = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`
export const Line = styled.hr`
  width: 100%;
  border: 1px solid ${props => (props.lightMode ? '#cbd5e1' : '#94a3b8')};
  margin-bottom: 30px;
`
export const ChannelLogo = styled.img`
  height: 45px;
  width: 45px;
  align-self: flex-start;
`
export const ChannelSubDetails = styled.div`
  margin-left: 15px;
`
export const Subscribers = styled(ViewsAndTime)`
  font-size: 13px;
  @media screen and (max-width: 575px) {
    font-size: 12px;
  }
`
export const Description = styled(ViewsAndTime)`
  margin-bottom: 50px;
  line-height: 1.5;
  margin-top: 30px;
  color: ${props => (props.lightMode ? '#383838' : '#f1f1f1')};
  @media screen and (max-width: 575px) {
    display: none;
  }
`
export const MobileDescription = styled(ViewsAndTime)`
  margin-bottom: 50px;
  line-height: 1.5;
  margin-top: 30px;
  color: ${props => (props.lightMode ? '#383838' : '#f1f1f1')};
  @media screen and (min-width: 576px) {
    display: none;
  }
`
