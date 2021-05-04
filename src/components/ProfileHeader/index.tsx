import React, { useContext } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { Header, LogOutText, LogOutWrapper, NameText } from './styles'

import { ProfileContext } from '../../contexts/ProfileContext'

function ProfileHeader() {
  const navigation = useNavigation()

  const { data } = useContext(ProfileContext)

  return (
    <>
      <Header>
        <NameText>{data.login}</NameText>
        <LogOutWrapper onPress={() => navigation.navigate('SignIn') } >
          <LogOutText>Sair</LogOutText>
          <Ionicons name='log-out-outline' size={24} color='#D03434' />
        </LogOutWrapper>
      </Header>
    </>
  )
}

export default ProfileHeader
