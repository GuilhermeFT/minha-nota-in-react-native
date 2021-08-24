import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text } from 'react-native'

import { Container } from './styles'

export function GetName() {
  return (
    <LinearGradient colors={['#0098FF', '#0163CA']} style={{ flex: 1 }}>
      <Container>
        <Text>Main Screen</Text>
      </Container>

      <StatusBar style="light" />
    </LinearGradient>
  )
}
