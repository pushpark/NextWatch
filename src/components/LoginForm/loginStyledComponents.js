import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;
  max-width: 1110px;
  margin: auto;
  background-color: ${props => (props.lightMode ? '#ffffff' : '#181818')};
  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }
`
export const LoginWebsiteLogoDesktopImage = styled.img`
  width: 185px;
  margin-bottom: 30px;
  margin-top: 20px;
  @media screen and (max-width: 575px) {
    width: 150px;
    height: 34px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 95%;
  max-width: 450px;
  background-color: ${props => (props.lightMode ? '#ffffff' : '#0f0f0f')};
  @media screen and (min-width: 992px) {
    width: 450px;
    flex-shrink: 0;
    box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
    padding: 64px 48px 64px 48px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${props => (props.lightMode ? '#7e858e' : '#ffffff')};
`

export const InputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid ${props => (props.lightMode ? '#d7dfe9' : '#475569')};
  background-color: transparent;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  align-self: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const CheckBox = styled.input`
  margin-right: 10px;
  height: 16px;
  width: 16px;
`
export const ShowPassword = styled.label`
  font-size: 14px;
  font-family: Roboto;
  color: ${props => (props.lightMode ? '#0f0f0f' : '#ffffff')};
`
