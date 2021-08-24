import React from 'react'

import { ButtonText, ButtonContainer } from './styles'

interface ButtonProps {
  disabled: boolean
  handleClick: () => void
}

export function Button({ disabled, handleClick }: ButtonProps) {
  return (
    <ButtonContainer
      disabled={disabled}
      onPress={handleClick}
      activeOpacity={0.8}
    >
      <ButtonText>Confirmar</ButtonText>
    </ButtonContainer>
  )
}
