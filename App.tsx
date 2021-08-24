import {
  useFonts,
  Jost_500Medium,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'
import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import MainRoutes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    Jost_500Medium,
    Jost_600SemiBold
  })

  if (!fontsLoaded) {
    return (
      <>
        <StatusBar style="light" />
        <AppLoading />
      </>
    )
  }

  return <MainRoutes />
}
