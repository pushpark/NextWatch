import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {Redirect, Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import {HiFire} from 'react-icons/hi'
import NextWatchContext from '../../Context/NextWatchContext'
import Header from '../Header'
import {
  SaveVideosBigContainer,
  SaveVideosContainer,
  SaveVideosContent,
  SaveVideosText,
  SaveVideosImage,
  SaveVideosBanner,
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
  VideoInnerCard,
  ChannelLogo,
  NoSavedContainer,
  NoSavedImage,
  NoSavedHeading,
  NoSavedText,
} from './SaveVideosStyledComponents'
import Sidebar from '../Sidebar'

const SaveVideos = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <NextWatchContext.Consumer>
      {value => {
        const {lightMode, savedVideos} = value
        const renderVideosListView = () => (
          <div>
            <SaveVideosBanner lightMode={lightMode}>
              <SaveVideosImage lightMode={lightMode}>
                <HiFire />
              </SaveVideosImage>
              <SaveVideosText lightMode={lightMode}>
                Saved Videos
              </SaveVideosText>
            </SaveVideosBanner>
            <VideosList>
              {savedVideos.map(each => {
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

        const renderAllVideos = () => {
          if (savedVideos.length !== 0) {
            console.log('yes')
            return renderVideosListView()
          }
          return (
            <NoSavedContainer>
              <NoSavedImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <NoSavedHeading lightMode={lightMode}>
                No saved videos found
              </NoSavedHeading>
              <NoSavedText lightMode={lightMode}>
                You can save your videos while watching them
              </NoSavedText>
            </NoSavedContainer>
          )
        }

        return (
          <SaveVideosBigContainer lightMode={lightMode}>
            <Header category="saved videos" />
            <SaveVideosContainer>
              <Sidebar category="saved videos" />
              <SaveVideosContent
                lightMode={lightMode}
                data-testid="savedVideos"
              >
                {renderAllVideos()}
              </SaveVideosContent>
            </SaveVideosContainer>
          </SaveVideosBigContainer>
        )
      }}
    </NextWatchContext.Consumer>
  )
}

export default SaveVideos
