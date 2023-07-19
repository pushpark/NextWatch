import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NextWatchContext from '../../Context/NextWatchContext'
import Header from '../Header'

import {
  NotFoundBigContainer,
  NotFoundContainer,
  NotFoundContent,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
} from './NotFoundStyledComponents'
import Sidebar from '../Sidebar'

const NotFound = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <NextWatchContext.Consumer>
      {value => {
        const {lightMode} = value
        const imageUrl = lightMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        return (
          <NotFoundBigContainer lightMode={lightMode}>
            <Header />
            <NotFoundContainer>
              <Sidebar />
              <NotFoundContent lightMode={lightMode}>
                <NotFoundImage src={imageUrl} alt="not found" />
                <NotFoundHeading lightMode={lightMode}>
                  Page Not Found
                </NotFoundHeading>
                <NotFoundText lightMode={lightMode}>
                  We are sorry,the page you requested could not be found.
                </NotFoundText>
              </NotFoundContent>
            </NotFoundContainer>
          </NotFoundBigContainer>
        )
      }}
    </NextWatchContext.Consumer>
  )
}

export default NotFound
