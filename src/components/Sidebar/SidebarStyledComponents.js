import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20vw;
  height: 100vh;
  @media screen and (max-width: 766px) {
    display: none;
  }
`
export const CategoriesContainer = styled.ul`
  margin-top: 30px;
  padding-left: 0px;
  list-style-type: none;
`
export const CategoryItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding-left: 20px;
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
export const SidebarBottomContainer = styled.div`
  padding: 20px;
`
export const ContactUS = styled.p`
  color: ${props => (props.lightMode ? '#1e293b' : '#ffffff')};
  font-size: 18px;
  font-family: Roboto;
  font-weight: 500;
`
export const LogoImage = styled.img`
  height: 35px;
  width: 35px;
  margin: 5px;
`
export const SidebarText = styled.p`
  color: ${props => (props.lightMode ? '#1e293b' : '#ffffff')};
  font-size: 17px;
  font-family: Roboto;
  font-weight: 500;
  line-height: 1.5;
`
