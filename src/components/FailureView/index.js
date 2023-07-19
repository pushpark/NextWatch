import NextWatchContext from '../../Context/NextWatchContext'
import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryButton,
} from './FailureViewStyledComponents'

const FailureView = props => (
  <NextWatchContext.Consumer>
    {value => {
      const {lightMode} = value
      const {onRetryButton} = props
      const onClickRetry = () => {
        onRetryButton()
      }
      return (
        <FailureContainer>
          <FailureImage
            src={
              lightMode
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            }
            alt="failure view"
          />
          <FailureHeading lightMode={lightMode}>
            Oops! Something Went Wrong
          </FailureHeading>
          <FailureText lightMode={lightMode}>
            We are having some trouble to complete your request. Please try
            again.
          </FailureText>
          <RetryButton type="button" onClick={onClickRetry}>
            Retry
          </RetryButton>
        </FailureContainer>
      )
    }}
  </NextWatchContext.Consumer>
)

export default FailureView
