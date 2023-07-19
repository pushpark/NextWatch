import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {HiFire} from 'react-icons/hi'
import NextWatchContext from '../../Context/NextWatchContext'
import {
  SidebarContainer,
  CategoriesContainer,
  CategoryItem,
  CategoryName,
  CategoryIcon,
  SidebarBottomContainer,
  ContactUS,
  LogoImage,
  SidebarText,
} from './SidebarStyledComponents'

const Sidebar = props => (
  <NextWatchContext.Consumer>
    {value => {
      const {lightMode} = value
      const {category} = props
      console.log(category)
      return (
        <SidebarContainer>
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
          <SidebarBottomContainer>
            <ContactUS lightMode={lightMode}>CONTACT US</ContactUS>
            <div>
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                alt="linked in logo"
              />
            </div>
            <SidebarText lightMode={lightMode}>
              Enjoy! Now to see your channels and recommendations!
            </SidebarText>
          </SidebarBottomContainer>
        </SidebarContainer>
      )
    }}
  </NextWatchContext.Consumer>
)

export default Sidebar
