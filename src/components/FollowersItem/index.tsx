import React, { useContext } from 'react';
import { ItemContainer, ItemTitle, Image, TitleContainer, YellowBord } from './styles'
import { ProfileContext } from '../../contexts/ProfileContext';

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { Alert } from 'react-native';

export interface FollowersData {
  id: number
  login: string
  avatar_url: string
  url: string
}

export interface FollowersItemProps {
  followers: FollowersData
}

const RepositoriesItem: React.FC<FollowersItemProps> = ({ followers }) => {
  const navigator = useNavigation()
  const { setData } = useContext(ProfileContext)

  function handleNavigation() {
    api.get(`/users/${followers.login}`)
      .then((response) => {
        setData(response.data)
        navigator.navigate('Home')
      })
      .catch((err) => {
        Alert.alert(
          'Erro',
          'Usuário não encontrado',
          [
            { text: 'OK' }
          ],
          { cancelable: false }
        )
      })
  }
  
  return (
    <ItemContainer>
      <YellowBord />
      <Image source={{ uri: followers.avatar_url }} />
      <TitleContainer onPress={() => handleNavigation() } >
        <ItemTitle>{followers.login}</ItemTitle>
        <Ionicons name='arrow-forward' size={22} color='#FFFFFF' style={{ marginRight: 16 }} />
      </TitleContainer>
    </ItemContainer>
  )
}

export default RepositoriesItem
