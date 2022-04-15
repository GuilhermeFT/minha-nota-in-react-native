import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import StackNavigation from './src/routes/stack.routes'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_900Black_Italic,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading'

import { ThemeProvider } from 'styled-components'
import theme from './src/styles/theme'

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    Roboto_900Black_Italic
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StackNavigation />
    </ThemeProvider>
  )
}
