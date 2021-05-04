import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  background-color: #292929;

  align-items: center;
  justify-content: center;
`

export const TextInput = styled.TextInput`
  border: 1px solid #E5E5E5;
  border-radius: 12px;

  width: 90%;
  height: 56px;
  margin: 45px 0 18px;
  padding: 15px 20px;

  font-size: 20px;
  color: #000000;

  background-color: #FFFFFF;
`

export const Button = styled(RectButton)`
  border: 1px solid #E5E5E5;
  border-radius: 12px;

  width: 90%;
  height: 56px;
  padding: 12px;

  color: #FFF;
  background-color: #FFCE00;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;

  color: #030202;

  margin-right: 10px;
`
