import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  padding: 0 0;
  background-color: ${({ theme }) => theme.colors.background.white};
`

export const NoteView = styled.Text`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: 'Roboto_400Regular';
  text-align: right;
  padding: 0 16px;
`

export const InputNote = styled.TextInput`
  height: 68px;
  font-size: 16px;
  text-align: right;
  background: ${({ theme }) => theme.colors.background.gray};
  padding: 8px 16px;
  margin-bottom: 12px;
`

export const StatusText = styled.Text`
  color: ${({ theme }) => theme.colors.text.quinary};
  text-align: right;
  padding: 16px;
`
