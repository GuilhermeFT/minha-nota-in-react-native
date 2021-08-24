import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { Dimensions, Text } from 'react-native'

import colors from '../../styles/colors'
import { SafeArea } from './styles'

export function Confirmation() {
  const [name, setName] = useState('')
  useEffect(() => {
    async function getName() {
      const value = await AsyncStorage.getItem('@MinhaNota:name')

      if (value !== null) {
        setName(value)
      }
    }

    getName()
  }, [])

  return (
    <LinearGradient
      colors={[colors.endFadeColor, colors.endFadeColor]}
      style={{ flex: 1, minHeight: Dimensions.get('window').height }}
    >
      <SafeArea>
        <Text>{name}</Text>

        <StatusBar style="light" />
      </SafeArea>
    </LinearGradient>
  )
}
