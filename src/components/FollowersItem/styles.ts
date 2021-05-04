import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const ItemContainer = styled.View`
  padding-top: 20px;
  padding-bottom: 35px;
  border: 1px solid transparent;
  border-bottom-color: #7070705A;

  flex: 1;
  flex-direction: row;
  align-items: center;
`

export const YellowBord = styled.View`
  height: 42px;
  width: 10px;
  margin-right: 18px;

  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: #FFCE00;
`

export const Image = styled.Image`
  border-width: 3px;
  border-color: #FFF;
  border-radius: 100px;

  height: 64px;
  width: 64px;
  margin-right: 32px;

  align-self: center;

  background-color: goldenrod;
`

export const TitleContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  height: 100px;
  margin-left: -16px;

  flex: 1;
  justify-content: space-between;
`

export const ItemTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF;
`
