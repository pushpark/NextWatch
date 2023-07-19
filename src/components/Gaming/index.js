import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import NextWatchContext from '../../Context/NextWatchContext'
import Header from '../Header'
import FailureView from '../FailureView'
import {
  GamingBigContainer,
  GamingContainer,
  GamingContent,
  GamingText,
  GamingImage,
  GamingBanner,
  VideosList,
  VideoCard,
  Thumbnail,
  LoaderDiv,
  VideoName,
  VideoViews,
} from './GamingStyledComponents'
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
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
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
        id: video.id,
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
              <GamingBanner lightMode={lightMode}>
                <GamingImage lightMode={lightMode}>
                  <SiYoutubegaming />
                </GamingImage>
                <GamingText Text lightMode={lightMode}>
                  Gaming
                </GamingText>
              </GamingBanner>
              <VideosList>
                {videosList.map(each => (
                  <Link
                    to={`/videos/${each.id}`}
                    style={{textDecoration: 'none'}}
                  >
                    <VideoCard key={each.id}>
                      <Thumbnail
                        src={each.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <VideoName lightMode={lightMode}>{each.title}</VideoName>
                      <VideoViews lightMode={lightMode}>
                        {each.viewCount} Watching Worldwide
                      </VideoViews>
                    </VideoCard>
                  </Link>
                ))}
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
            <GamingBigContainer lightMode={lightMode}>
              <Header category="gaming" />
              <GamingContainer>
                <Sidebar category="gaming" />
                <GamingContent lightMode={lightMode} data-testid="gaming">
                  {renderAllVideos()}
                </GamingContent>
              </GamingContainer>
            </GamingBigContainer>
          )
        }}
      </NextWatchContext.Consumer>
    )
  }
}

export default Trending
