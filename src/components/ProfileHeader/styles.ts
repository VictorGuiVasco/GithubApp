import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Header = styled.View`
  height: 126px;
  padding: 23px 30px 0 11px;
  
  flex-direction: row;
  justify-content: space-between;

  background-color: #1F1F1F;
`

export const NameText = styled.Text`
  color: #FFFFFF;
  font-size: 17px;
  font-weight: bold;
`

export const LogOutWrapper = styled(RectButton)`
  height: 25px;

  flex-direction: row;
  justify-content: center;
`

export const LogOutText = styled.Text`
  margin-right: 10px;

  color: #CCC;
  font-size: 17px;
`
