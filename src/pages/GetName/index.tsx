import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'

import { Button } from '../../components/Button'
import colors from '../../styles/colors'
import {
  SafeArea,
  Container,
  TitleContainer,
  Title,
  Emoji,
  Input
} from './styles'

export function GetName() {
  const [inputName, setInputName] = useState('')

  async function handleClickButton() {
    await AsyncStorage.setItem('@MinhaNota:name', inputName)
  }

  return (
    <LinearGradient
      colors={[colors.endFadeColor, colors.endFadeColor]}
      style={{ flex: 1, minHeight: Dimensions.get('window').height }}
    >
      <SafeArea>
        <Container>
          <TitleContainer>
            <Title>Olá, como podemos chamar você?</Title>
            <Emoji>😀</Emoji>
          </TitleContainer>

          <Input
            placeholder="Digite seu nome"
            placeholderTextColor={colors.textPlaceholder}
            selectionColor={'#ccc'}
            value={inputName}
            onChangeText={setInputName}
            autoCompleteType="username"
            autoCapitalize="words"
          />

          <Button
            handleClick={handleClickButton}
            disabled={inputName.length < 3}
          />
        </Container>

        <StatusBar style="light" />
      </SafeArea>
    </LinearGradient>
  )
}
