import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import NextWatchContext from '../../Context/NextWatchContext'
import Header from '../Header'
import FailureView from '../FailureView'
import {
  VideoItemBigContainer,
  VideoItemContainer,
  VideoItemContent,
  VideoDisplayContainer,
  LoaderDiv,
  VideoContainer,
  ChannelDetails,
  VideoName,
  VideoSubDetails,
  VideoSubDetailsInnerContainer,
  ViewsAndTime,
  Dot,
  LikeButton,
  LikeAndSave,
  DislikeButton,
  SaveButton,
  Line,
  ChannelLogo,
  ChannelSubDetails,
  Subscribers,
  Description,
  MobileDescription,
} from './VideoItemStyledComponents'
import Sidebar from '../Sidebar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItem extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    liked: false,
    disLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      const video = fetchedData.video_details
      console.log(video)
      const videoDetails = {
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
          subscriberCount: video.channel.subscriber_count,
        },
        description: video.description,
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        videoUrl: video.video_url,
        title: video.title,
        viewCount: video.view_count,
      }
      console.log(videoDetails)
      this.setState({
        videoDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickSearchButton = () => {
    this.getVideos()
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <NextWatchContext.Consumer>
        {value => {
          const {
            lightMode,
            addToSavedList,
            deleteSavedVideo,
            savedVideos,
          } = value
          const {videoDetails, liked, disLiked} = this.state
          const isPresent = savedVideos.find(
            each => each.id === videoDetails.id,
          )
          const saved = !(isPresent === undefined)
          const renderLoadingView = () => (
            <LoaderDiv
              className="products-loader-container"
              data-testid="loader"
            >
              <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
            </LoaderDiv>
          )

          const renderFailureView = () => <FailureView />

          const onClickLikeButton = () => {
            if (liked && disLiked) {
              this.setState({liked: false})
            } else if (disLiked) {
              this.setState({liked: true, disLiked: false})
            } else if (liked) {
              this.setState({liked: false})
            } else {
              this.setState({liked: true})
            }
          }
          const onClickDisLikeButton = () => {
            if (liked && disLiked) {
              this.setState({liked: false})
            } else if (liked) {
              this.setState({disLiked: true, liked: false})
            } else if (disLiked) {
              this.setState({disLiked: false})
            } else {
              this.setState({disLiked: true})
            }
          }

          const onClickSave = () => {
            if (saved) {
              deleteSavedVideo(videoDetails.id)
            } else {
              addToSavedList(videoDetails)
            }
          }

          const renderVideoView = () => {
            const duration = formatDistanceToNow(
              new Date(videoDetails.publishedAt),
            ).split(' ')[1]
            return (
              <VideoContainer>
                <VideoDisplayContainer>
                  <ReactPlayer
                    url={videoDetails.videoUrl}
                    width="100%"
                    height="100%"
                    controls
                  />
                </VideoDisplayContainer>
                <ChannelDetails>
                  <VideoName lightMode={lightMode}>
                    {videoDetails.title}
                  </VideoName>
                  <VideoSubDetails>
                    <VideoSubDetailsInnerContainer>
                      <ViewsAndTime lightMode={lightMode}>
                        {videoDetails.viewCount}
                      </ViewsAndTime>
                      <Dot lightMode={lightMode}>
                        <BsDot />
                      </Dot>
                      <ViewsAndTime lightMode={lightMode}>
                        {duration} years ago
                      </ViewsAndTime>
                    </VideoSubDetailsInnerContainer>
                    <VideoSubDetailsInnerContainer>
                      <LikeButton
                        type="button"
                        lightMode={lightMode}
                        liked={liked}
                        onClick={onClickLikeButton}
                      >
                        <BiLike />
                        <LikeAndSave>Like</LikeAndSave>
                      </LikeButton>
                      <DislikeButton
                        type="button"
                        lightMode={lightMode}
                        disLiked={disLiked}
                        onClick={onClickDisLikeButton}
                      >
                        <BiDislike />
                        <LikeAndSave>Dislike</LikeAndSave>
                      </DislikeButton>
                      <SaveButton
                        type="button"
                        lightMode={lightMode}
                        saved={saved}
                        onClick={onClickSave}
                      >
                        <BiListPlus />
                        <LikeAndSave>{saved ? 'Saved' : 'Save'}</LikeAndSave>
                      </SaveButton>
                    </VideoSubDetailsInnerContainer>
                  </VideoSubDetails>
                  <Line lightMode={lightMode} />
                  <VideoSubDetailsInnerContainer>
                    <ChannelLogo
                      src={videoDetails.channel.profileImageUrl}
                      alt="channel logo"
                    />
                    <ChannelSubDetails>
                      <VideoName lightMode={lightMode}>
                        {videoDetails.channel.name}
                      </VideoName>
                      <Subscribers lightMode={lightMode}>
                        {videoDetails.channel.subscriberCount} subscribers
                      </Subscribers>
                      <Description lightMode={lightMode}>
                        {videoDetails.description}
                      </Description>
                    </ChannelSubDetails>
                  </VideoSubDetailsInnerContainer>
                  <MobileDescription lightMode={lightMode}>
                    {videoDetails.description}
                  </MobileDescription>
                </ChannelDetails>
              </VideoContainer>
            )
          }

          const renderVideoPlayer = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case apiStatusConstants.success:
                return renderVideoView()
              case apiStatusConstants.failure:
                return renderFailureView()
              case apiStatusConstants.inProgress:
                return renderLoadingView()
              default:
                return null
            }
          }

          return (
            <VideoItemBigContainer lightMode={lightMode}>
              <Header />
              <VideoItemContainer>
                <Sidebar />
                <VideoItemContent
                  lightMode={lightMode}
                  data-testid="videoItemDetails"
                >
                  {renderVideoPlayer()}
                </VideoItemContent>
              </VideoItemContainer>
            </VideoItemBigContainer>
          )
        }}
      </NextWatchContext.Consumer>
    )
  }
}

export default VideoItem
