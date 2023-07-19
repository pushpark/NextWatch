import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import {BsDot} from 'react-icons/bs'
import NextWatchContext from '../../Context/NextWatchContext'
import Header from '../Header'
import FailureView from '../FailureView'
import {
  HomeBigContainer,
  HomeContainer,
  BannerContainer,
  BannerLogoContainer,
  BannerLogo,
  BannerCloseButton,
  BannerText,
  BannerButton,
  HomeContent,
  SearchInput,
  SearchButton,
  SearchContainer,
  VideosList,
  VideoCard,
  Thumbnail,
  VideoInnerCard,
  ChannelLogo,
  ChannelDetails,
  VideoName,
  VideoDetails,
  VideoSubDetail,
  VideoSubDetails,
  Dot,
  DesktopVideoDetails,
  NoResultsContainer,
  NoResultsImage,
  NoResultHeading,
  NoResultText,
  RetryButton,
  LoaderDiv,
} from './HomeStyledComponents'
import Sidebar from '../Sidebar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    showBanner: true,
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
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
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  onClickShowBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    this.getVideos()
  }

  onClickRetry = () => {
    this.setState({searchInput: ''})
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
          const {showBanner, searchInput, videosList} = this.state
          const renderBanner = () => (
            <BannerContainer data-testid="banner">
              <BannerLogoContainer>
                <div>
                  <BannerLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                </div>
                <div>
                  <BannerCloseButton
                    type="button"
                    onClick={this.onClickShowBanner}
                    data-testid="close"
                  >
                    <AiOutlineClose />
                  </BannerCloseButton>
                </div>
              </BannerLogoContainer>
              <BannerText>
                Buy Nxt Watch Premium prepaid plan with UPI
              </BannerText>
              <BannerButton>GET IT NOW</BannerButton>
            </BannerContainer>
          )

          const renderVideosListView = () => (
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
                    <VideoCard key={each.id}>
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
                              {formatDistanceToNow(new Date(each.publishedAt))}
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
          )

          const rendedNoResults = () => (
            <NoResultsContainer>
              <NoResultsImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoResultHeading lightMode={lightMode}>
                No Search results found
              </NoResultHeading>
              <NoResultText lightMode={lightMode}>
                Try different key words or remove search results
              </NoResultText>
              <RetryButton type="button" onClick={this.onClickRetry}>
                Retry
              </RetryButton>
            </NoResultsContainer>
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
                return videosList.length === 0
                  ? rendedNoResults()
                  : renderVideosListView()
              case apiStatusConstants.failure:
                return renderFailureView()
              case apiStatusConstants.inProgress:
                return renderLoadingView()
              default:
                return null
            }
          }

          return (
            <HomeBigContainer lightMode={lightMode}>
              <Header category="home" />
              <HomeContainer>
                <Sidebar category="home" />
                <div>
                  {showBanner && renderBanner()}
                  <HomeContent lightMode={lightMode} data-testid="home">
                    <SearchContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        onChange={this.onChangeSearchInput}
                        lightMode={lightMode}
                        value={searchInput}
                      />
                      <SearchButton
                        type="button"
                        onClick={this.onClickSearchButton}
                        lightMode={lightMode}
                        data-testid="searchButton"
                      >
                        <AiOutlineSearch />
                      </SearchButton>
                    </SearchContainer>
                    {renderAllVideos()}
                  </HomeContent>
                </div>
              </HomeContainer>
            </HomeBigContainer>
          )
        }}
      </NextWatchContext.Consumer>
    )
  }
}

export default Home
