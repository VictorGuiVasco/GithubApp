import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import Constants from 'expo-constants'

import { StyleSheet } from 'react-native'

const statusBarHeight = Constants.statusBarHeight

export const Header = styled.View`
  height: 68px;
  
  justify-content: center;
  align-items: center;

  background-color: #1F1F1F;
`

export const HeaderText = styled.Text`
  color: #FFFFFF;
  font-size: 17px;
  font-weight: bold;
`

const StyledFlatList = styled(FlatList)`
  background-color: #f7f7f7;
`

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,

    backgroundColor: '#292929'
  }
})
