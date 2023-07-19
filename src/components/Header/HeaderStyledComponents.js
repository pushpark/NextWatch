import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`
export const HeaderLogo = styled.img`
  height: 40px;
  width: 160px;
  @media screen and (max-width: 766px) {
    height: 28px;
    width: 110px;
  }
`
export const HeaderOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const ModeButton = styled.button`
  border: none;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  color: ${props => (props.lightMode ? '#0f0f0f ' : '#ffffff')};
  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`
export const OptionButton = styled(ModeButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 25px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const CategoryPopup = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  margin-top: 0px;
  background-color: ${props => (props.lightMode ? '#f9f9f9' : '#181818')};
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 22px;
  font-weight: bold;
  align-self: flex-end;
  margin: 30px;
  color: ${props => (props.lightMode ? '#231f20' : '#ffffff')};
`
export const CategoriesContainer = styled.ul`
  margin-top: 30vh;
  padding-left: 0px;
  list-style-type: none;
`
export const CategoryItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding-left: 26%;
  background-color: ${props => {
    if (props.selected) {
      if (props.lightMode) {
        return ' #f1f5f9'
      }
      return '#424242'
    }
    return 'transparent'
  }};
`
export const CategoryName = styled.div`
  font-size: 15px;
  margin-left: 15px;
  text-decoration: none;
  font-family: roboto;
  color: ${props => (props.lightMode ? '#231f20' : '#ffffff')};
  font-weight: ${props => (props.selected ? 'bold' : 400)};
`
export const CategoryIcon = styled.p`
  font-size: 18px;
  color: ${props => {
    if (props.selected) {
      return '#ff0000'
    }
    if (props.lightMode) {
      return ' #606060'
    }
    return '#909090'
  }};
`
export const LogoutPopup = styled.div`
  height:100vh;
  width:100vw;
  margin-top:-20px;
  background: rgba(0, 0, 0, 0.5);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
`
export const LogoutContainer = styled.div`
  width: 80vw;
  padding: 10px;
  border-radius: 10px;
  height: 150px;
  @media screen and (min-width: 566px) {
    width: 350px;
  }
  background-color: ${props => (props.lightMode ? '#ffffff' : '#181818')};
`
export const LogoutWarning = styled.p`
  color: ${props => (props.lightMode ? ' #00306e' : '#ffffff')};
  font-size: 18px;
  font-family: roboto;
  text-align: center;
`
export const LogoutCancelButton = styled.button`
  color: #94a3b8;
  background-color: transparent;
  border: 1px solid #94a3b8;
  height: 40px;
  margin: 18px;
  width: 80px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 3px;
  font-family: roboto;
`
export const LogoutConfirmButton = styled(LogoutCancelButton)`
  background-color: #3b82f6;
  border: none;
  color: #ffffff;
`

export const LogoutButtons = styled.div`
  display: flex;
  justify-content: center;
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  display: flex;
  margin-left: 25px;
  margin-right: 25px;
  @media screen and (max-width: 766px) {
    display: none;
  }
`
export const DesktopLogoutButton = styled.button`
  color: ${props => (props.lightMode ? '#3b82f6' : '#ffffff')};
  background-color: transparent;
  border: 1px solid ${props => (props.lightMode ? '#3b82f6' : '#ffffff')};
  height: 30px;
  width: 80px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 3px;
  font-family: roboto;
  display: flex;
  padding-top: 5px;
  padding-left: 12px;
  text-align: center;
  @media screen and (max-width: 766px) {
    display: none;
  }
`
