import React, { useState, useEffect, useContext } from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { ProfileContainer, styles, } from './styles'

import Profile from '../../components/Profile'
import { ProfileContext } from '../../contexts/ProfileContext'
import ProfileHeader from '../../components/ProfileHeader'

function Home() {
  return (
    <View style={styles.container} >
      <ProfileHeader />

      <ProfileContainer>
        <Profile />
      </ProfileContainer>
    </View>
  )
}

export default Home
