import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/SignIn'
import ProfileTabs from './ProfileTabs'

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
  return (
    <NavigationContainer >
      <Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }} >
        <Screen name='SignIn' component={SignIn} />
        <Screen name='Profile' component={ProfileTabs} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack
