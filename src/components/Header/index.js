import {Link, withRouter} from 'react-router-dom'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose, AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {HiFire} from 'react-icons/hi'
import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'
import {
  HeaderContainer,
  HeaderLogo,
  HeaderOptions,
  ModeButton,
  OptionButton,
  CloseButton,
  CategoryPopup,
  CategoriesContainer,
  CategoryItem,
  CategoryName,
  CategoryIcon,
  LogoutPopup,
  LogoutContainer,
  LogoutWarning,
  LogoutCancelButton,
  LogoutButtons,
  LogoutConfirmButton,
  ProfileImage,
  DesktopLogoutButton,
} from './HeaderStyledComponents'
import NextWatchContext from '../../Context/NextWatchContext'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <NextWatchContext.Consumer>
      {value => {
        const {lightMode, onClickMode} = value
        const {category} = props
        const logoUrl = lightMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        const modeIcon = lightMode ? <FaMoon /> : <FiSun />
        const renderLogoutButton = () => (
          <Popup
            modal
            trigger={
              <div>
                <OptionButton lightMode={lightMode} type="button">
                  <FiLogOut />
                </OptionButton>
                <DesktopLogoutButton lightMode={lightMode}>
                  Logout
                </DesktopLogoutButton>
              </div>
            }
          >
            {close => (
              <LogoutPopup>
                <LogoutContainer lightMode={lightMode}>
                  <LogoutWarning lightMode={lightMode}>
                    Are you sure, you want to logout
                  </LogoutWarning>
                  <LogoutButtons>
                    <LogoutCancelButton type="button" onClick={close}>
                      Cancel
                    </LogoutCancelButton>
                    <LogoutConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </LogoutConfirmButton>
                  </LogoutButtons>
                </LogoutContainer>
              </LogoutPopup>
            )}
          </Popup>
        )

        const renderCategories = () => (
          <Popup
            modal
            trigger={
              <OptionButton lightMode={lightMode}>
                <GiHamburgerMenu />
              </OptionButton>
            }
          >
            {close => (
              <CategoryPopup lightMode={lightMode}>
                <CloseButton
                  lightMode={lightMode}
                  type="button"
                  onClick={close}
                >
                  <AiOutlineClose />
                </CloseButton>
                <CategoriesContainer>
                  <Link to="/" style={{textDecoration: 'none'}}>
                    <CategoryItem
                      selected={category === 'home'}
                      lightMode={lightMode}
                    >
                      <CategoryIcon
                        selected={category === 'home'}
                        lightMode={lightMode}
                      >
                        <AiFillHome />
                      </CategoryIcon>

                      <CategoryName
                        selected={category === 'home'}
                        lightMode={lightMode}
                      >
                        Home
                      </CategoryName>
                    </CategoryItem>
                  </Link>
                  <Link to="/trending" style={{textDecoration: 'none'}}>
                    <CategoryItem
                      selected={category === 'trending'}
                      lightMode={lightMode}
                    >
                      <CategoryIcon
                        selected={category === 'trending'}
                        lightMode={lightMode}
                      >
                        <HiFire />
                      </CategoryIcon>
                      <CategoryName
                        selected={category === 'trending'}
                        lightMode={lightMode}
                      >
                        Trending
                      </CategoryName>
                    </CategoryItem>
                  </Link>
                  <Link to="/gaming" style={{textDecoration: 'none'}}>
                    <CategoryItem
                      selected={category === 'gaming'}
                      lightMode={lightMode}
                    >
                      <CategoryIcon
                        selected={category === 'gaming'}
                        lightMode={lightMode}
                      >
                        <SiYoutubegaming />
                      </CategoryIcon>

                      <CategoryName
                        selected={category === 'gaming'}
                        lightMode={lightMode}
                      >
                        Gaming
                      </CategoryName>
                    </CategoryItem>
                  </Link>

                  <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                    <CategoryItem
                      selected={category === 'saved videos'}
                      lightMode={lightMode}
                    >
                      <CategoryIcon
                        selected={category === 'saved videos'}
                        lightMode={lightMode}
                      >
                        <BiListPlus />
                      </CategoryIcon>

                      <CategoryName
                        lightMode={lightMode}
                        selected={category === 'saved videos'}
                      >
                        Saved videos
                      </CategoryName>
                    </CategoryItem>
                  </Link>
                </CategoriesContainer>
              </CategoryPopup>
            )}
          </Popup>
        )

        return (
          <HeaderContainer>
            <Link to="/" style={{textDecoration: 'none'}}>
              <HeaderLogo src={logoUrl} alt="website logo" />
            </Link>
            <HeaderOptions>
              <ModeButton
                type="button"
                onClick={onClickMode}
                lightMode={lightMode}
                data-testid="theme"
              >
                {modeIcon}
              </ModeButton>
              {renderCategories()}
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              {renderLogoutButton()}
            </HeaderOptions>
          </HeaderContainer>
        )
      }}
    </NextWatchContext.Consumer>
  )
}

export default withRouter(Header)
