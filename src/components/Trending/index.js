import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {BsDot} from 'react-icons/bs'
import {HiFire} from 'react-icons/hi'
import NextWatchContext from '../../Context/NextWatchContext'
import Header from '../Header'
import FailureView from '../FailureView'
import {
  TrendingBigContainer,
  TrendingContainer,
  TrendingContent,
  TrendingText,
  TrendingImage,
  TrendingBanner,
  VideosList,
  VideoCard,
  Thumbnail,
  ChannelDetails,
  VideoName,
  VideoDetails,
  VideoSubDetail,
  VideoSubDetails,
  Dot,
  DesktopVideoDetails,
  LoaderDiv,
  VideoInnerCard,
  ChannelLogo,
} from './TrendingStyledComponents'
import Sidebar from '../Sidebar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData.videos[1])
      const videosList = fetchedData.videos.map(video => ({
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        id: video.id,
        publishedAt: video.published_at,
        thumbnailUrl: video.thumbnail_url,
        title: video.title,
        viewCount: video.view_count,
      }))
      console.log(videosList[1])
      this.setState({
        videosList,
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

  onRetryButton = () => {
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
          const {lightMode} = value
          const {videosList} = this.state

          const renderVideosListView = () => (
            <div>
              <TrendingBanner lightMode={lightMode}>
                <TrendingImage lightMode={lightMode}>
                  <HiFire />
                </TrendingImage>
                <TrendingText lightMode={lightMode}>Trending</TrendingText>
              </TrendingBanner>
              <VideosList>
                {videosList.map(each => {
                  const duration = formatDistanceToNow(
                    new Date(each.publishedAt),
                  ).split(' ')
                  return (
                    <Link
                      to={`/videos/${each.id}`}
                      style={{textDecoration: 'none'}}
                    >
                      <VideoCard>
                        <Thumbnail
                          src={each.thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <VideoInnerCard>
                          <ChannelLogo src={each.channel.profileImageUrl} />
                          <ChannelDetails>
                            <VideoName lightMode={lightMode}>
                              {each.title}
                            </VideoName>
                            <VideoSubDetail lightMode={lightMode}>
                              {each.channel.name}
                            </VideoSubDetail>
                            <VideoDetails>
                              <VideoSubDetails lightMode={lightMode}>
                                {each.channel.name}
                              </VideoSubDetails>
                              <Dot lightMode={lightMode}>
                                <BsDot />
                              </Dot>
                              <VideoSubDetails lightMode={lightMode}>
                                {each.viewCount} views
                              </VideoSubDetails>
                              <Dot lightMode={lightMode}>
                                <BsDot />
                              </Dot>
                              <VideoSubDetails lightMode={lightMode}>
                                {duration[1]} years ago
                              </VideoSubDetails>
                            </VideoDetails>
                            <DesktopVideoDetails>
                              <VideoSubDetails lightMode={lightMode}>
                                {each.viewCount} views
                              </VideoSubDetails>
                              <Dot lightMode={lightMode}>
                                <BsDot />
                              </Dot>
                              <VideoSubDetails lightMode={lightMode}>
                                {duration[1]} years ago
                              </VideoSubDetails>
                            </DesktopVideoDetails>
                          </ChannelDetails>
                        </VideoInnerCard>
                      </VideoCard>
                    </Link>
                  )
                })}
              </VideosList>
            </div>
          )

          const renderLoadingView = () => (
            <LoaderDiv
              className="products-loader-container"
              data-testid="loader"
            >
              <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
            </LoaderDiv>
          )

          const renderFailureView = () => (
            <FailureView onRetryButton={this.onRetryButton} />
          )

          const renderAllVideos = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case apiStatusConstants.success:
                return renderVideosListView()
              case apiStatusConstants.failure:
                return renderFailureView()
              case apiStatusConstants.inProgress:
                return renderLoadingView()
              default:
                return null
            }
          }

          return (
            <TrendingBigContainer lightMode={lightMode}>
              <Header category="trending" />
              <TrendingContainer>
                <Sidebar category="trending" />
                <TrendingContent lightMode={lightMode} data-testid="trending">
                  {renderAllVideos()}
                </TrendingContent>
              </TrendingContainer>
            </TrendingBigContainer>
          )
        }}
      </NextWatchContext.Consumer>
    )
  }
}

export default Trending
