import styled from 'styled-components/native'

interface ButtonWrapperProps {
  width?: 'default' | 'full'
}

interface ButtonLabelProps {
  variant?: 'default' | 'danger'
  th?: 'default' | 'full'
}

export const ButtonWrapper = styled.TouchableOpacity<ButtonWrapperProps>``
