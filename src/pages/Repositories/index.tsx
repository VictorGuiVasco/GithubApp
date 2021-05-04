import React, { useContext, useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import { ProfileContext } from '../../contexts/ProfileContext'

import { Header, HeaderText, styles } from './styles'

import RepositoriesItem, { RepositoriesData } from '../../components/RepositoriesItem'

import api from '../../services/api'

function Repositories() {

  const { data } = useContext(ProfileContext)
  const [repos, setRepos] = useState([])

  useEffect(() => {
    api.get(`/users/${data.login}/repos`)
      .then((response) => setRepos(response.data))
  }, [data])

  return (
    <View style={styles.container} >
      <Header>
        <HeaderText>{data.public_repos} Repositorios</HeaderText>
      </Header>

      <FlatList
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 10
        }}
        data={repos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <RepositoriesItem key={item.id} repositories={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Repositories
