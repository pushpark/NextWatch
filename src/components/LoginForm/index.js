import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import NextWatchContext from '../../Context/NextWatchContext'

import {
  LoginFormContainer,
  LoginWebsiteLogoDesktopImage,
  FormContainer,
  InputContainer,
  InputLabel,
  InputField,
  LoginButton,
  ErrorMessage,
  CheckBoxContainer,
  CheckBox,
  ShowPassword,
} from './loginStyledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onClickCheck = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NextWatchContext.Consumer>
        {value => {
          const {lightMode} = value

          const renderLogoImage = () =>
            lightMode ? (
              <LoginWebsiteLogoDesktopImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
            ) : (
              <LoginWebsiteLogoDesktopImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                alt="website logo"
              />
            )
          const renderPasswordField = () => {
            const {password, showPassword} = this.state
            const type = showPassword ? 'text' : 'password'
            return (
              <>
                <InputLabel lightMode={lightMode} htmlFor="password">
                  PASSWORD
                </InputLabel>
                <InputField
                  lightMode={lightMode}
                  type={type}
                  id="password"
                  value={password}
                  onChange={this.onChangePassword}
                  placeholder="Password"
                />
              </>
            )
          }

          const renderUsernameField = () => {
            const {username} = this.state

            return (
              <>
                <InputLabel lightMode={lightMode} htmlFor="username">
                  USERNAME
                </InputLabel>
                <InputField
                  lightMode={lightMode}
                  type="text"
                  id="username"
                  value={username}
                  onChange={this.onChangeUsername}
                  placeholder="Username"
                />
              </>
            )
          }

          return (
            <>
              <LoginFormContainer lightMode={lightMode}>
                <FormContainer
                  lightMode={lightMode}
                  className="form-container"
                  onSubmit={this.submitForm}
                >
                  {renderLogoImage()}
                  <InputContainer className="input-container">
                    {renderUsernameField()}
                  </InputContainer>
                  <InputContainer className="input-container">
                    {renderPasswordField()}
                  </InputContainer>
                  <CheckBoxContainer>
                    <CheckBox
                      type="checkbox"
                      id="checkbox"
                      onClick={this.onClickCheck}
                    />
                    <ShowPassword htmlFor="checkbox" lightMode={lightMode}>
                      Show Password
                    </ShowPassword>
                  </CheckBoxContainer>
                  <LoginButton type="submit" className="login-button">
                    Login
                  </LoginButton>
                  {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
                </FormContainer>
              </LoginFormContainer>
            </>
          )
        }}
      </NextWatchContext.Consumer>
    )
  }
}

export default LoginForm
