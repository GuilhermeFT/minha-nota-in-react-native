import styled from 'styled-components/native'

interface ButtonWrapperProps {
  width?: 'default' | 'full'
}

interface ButtonLabelProps {
  variant?: 'default' | 'danger'
  th?: 'default' | 'full'
}

export const ButtonWrapper = styled.TouchableOpacity<ButtonWrapperProps>`
  background: ${({ theme }) => theme.colors.background.gray};
  width: ${({ width }) => (width === 'full' ? '100%' : '180px')};
  height: 180px;
  border-radius: 12px;
  padding: 12px;
  justify-content: flex-end;
  align-items: center;
`

export const ButtonLabel = styled.Text<ButtonLabelProps>`
  color: ${({ theme, variant }) =>
    variant === 'danger'
      ? theme.colors.text.quaternary
      : theme.colors.text.tertiary};
  font-size: 18px;
`

export const ButtonAcronymContainer = styled.View`
  flex-direction: row;
`

export const ButtonAcronymWordOne = styled.Text<ButtonLabelProps>`
  color: ${({ theme, variant }) =>
    variant === 'danger'
      ? theme.colors.text.quaternary
      : theme.colors.text.tertiary};
  font-family: 'Roboto_900Black_Italic';
  font-size: 72px;
`

export const ButtonAcronymWordTwo = styled.Text<ButtonLabelProps>`
  color: ${({ theme, variant }) =>
    variant === 'danger'
      ? theme.colors.text.quaternary
      : theme.colors.text.tertiary};
  margin-left: -4px;
  margin-top: 24px;
  font-family: 'Roboto_900Black_Italic';
  font-size: 72px;
`
