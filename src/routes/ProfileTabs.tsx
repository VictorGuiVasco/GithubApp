import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Home from '../pages/Home'
import Repositories from '../pages/Repositories'
import Followers from '../pages/Followers'
import Following from '../pages/Following'

const { Navigator, Screen } = createBottomTabNavigator()

function ProfileTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 80,
        },
        tabStyle: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20
        },
        labelStyle: {
          fontSize: 15,
        },
        inactiveBackgroundColor: '#FAFAFC',
        activeBackgroundColor: '#EBEBF5',
        inactiveTintColor: '#969696',
        activeTintColor: '#3E3E3E'
      }}
    >
      <Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name='ios-home-outline' size={size} color={focused ? '#000000' : color} />
            )
          }
        }}
      />
      <Screen
        name='Repositories'
        component={Repositories}
        options={{
          tabBarLabel: 'Repos',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name='ios-logo-github' size={size} color={focused ? '#000000' : color} />
            )
          }
        }}
      />
      <Screen
        name='Followers'
        component={Followers}
        options={{
          tabBarLabel: 'Seguidores',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name='ios-people' size={size} color={focused ? '#000000' : color} />
            )
          }
        }}
      />
      <Screen
        name='Following'
        component={Following}
        options={{
          tabBarLabel: 'Seguindo',
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons name='ios-people' size={size} color={focused ? '#000000' : color} />
            )
          }
        }}
      />
    </Navigator>
  )
}

export default ProfileTabs
