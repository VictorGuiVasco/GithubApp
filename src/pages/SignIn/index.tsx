import React, { useContext, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

import { ProfileContext } from '../../contexts/ProfileContext'

import { Button, Container, Text, TextInput } from './styles'

import api from '../../services/api'

function SignIn() {
  const navigation = useNavigation()

  const [text, setText] = useState('')
  const { setData } = useContext(ProfileContext)

  function handleNavigation() {
    api.get(`/users/${text}`)
      .then((response) => {
        setData(response.data)
        navigation.navigate('Profile')
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
      }
    )
  }

  return (
    <Container>
      <Ionicons name='logo-github' size={98} color='#FFCE00' />
      <TextInput
        placeholder='Usuário'
        placeholderTextColor='#535353'

        onChangeText={(item) => setText(item)}
      />
      <Button onPress={handleNavigation} >
        <Text>ENTRAR</Text>
        <Ionicons name='arrow-forward' size={22} color='#000000' />
      </Button>
    </Container>
  )
}

export default SignIn
