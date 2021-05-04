import React, { useContext, useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'
import FollowersItem, { FollowersData } from '../../components/FollowersItem'
import { ProfileContext } from '../../contexts/ProfileContext'

import { Header, HeaderText, styles } from './styles'

import api from '../../services/api'

function Following() {

  const { data } = useContext(ProfileContext)
  const [following, setFollowing] = useState([])

  useEffect(() => {
    api.get(`/users/${data.login}/following`)
      .then((response) => setFollowing(response.data))
  }, [data])

  return (
    <View style={styles.container} >
      <Header>
        <HeaderText>Seguindo {data.following}</HeaderText>
      </Header>

      <ScrollView
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 10
        }}
      >
        {following.map((following: FollowersData) => {
          return (
            <FollowersItem
              key={following.id}
              followers={following}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Following
