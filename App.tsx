import { StatusBar } from 'expo-status-bar'
import React from 'react'

import ProfileProvider from './src/contexts/ProfileContext'

import AppStack from './src/routes/AppStack'

export default function App() {
  return (
    <ProfileProvider>
      <AppStack />
      <StatusBar style='light' backgroundColor='#000000' />
    </ProfileProvider>
  )
}
