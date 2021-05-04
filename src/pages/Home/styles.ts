import styled from 'styled-components/native'
import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

const statusBarHeight = Constants.statusBarHeight

export const ProfileContainer = styled.View``

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,

    backgroundColor: '#292929'
  }
})
