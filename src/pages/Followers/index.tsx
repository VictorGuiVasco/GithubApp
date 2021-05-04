import React, { useContext, useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'
import FollowersItem, { FollowersData } from '../../components/FollowersItem'
import { ProfileContext } from '../../contexts/ProfileContext'

import { Header, HeaderText, styles } from './styles'

import api from '../../services/api'

function Followers() {

  const { data } = useContext(ProfileContext)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    api.get(`/users/${data.login}/followers`)
      .then((response) => setFollowers(response.data))
  }, [data])

  return (
    <View style={styles.container} >
      <Header>
        <HeaderText>{data.followers} Seguidores</HeaderText>
      </Header>

      <ScrollView
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 10
        }}
      >
        {followers.map((followers: FollowersData) => {
          return (
            <FollowersItem
              key={followers.id}
              followers={followers}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Followers
