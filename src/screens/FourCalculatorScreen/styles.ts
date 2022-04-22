import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.white};
  padding: 0 0;
`

export const TextResult = styled.Text`
  height: 68px;
  font-size: 48px;
  text-align: right;
  background: ${({ theme }) => theme.colors.background.gray};
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: 0 16px;
  width: 100%;
  font-family: 'Roboto_400Regular';
`

export const StatusText = styled.Text`
  width: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.quinary};
  background: ${({ theme }) => theme.colors.background.gray};
  text-align: right;
  padding: 8px 16px;
  font-family: 'Roboto_700Bold';
`

export const EditorWrapper = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  padding: 16px;
`

export const StyledTextInput = styled.TextInput`
  padding: 16px;
  margin-bottom: 16px;
  width: 100%;
  height: 58px;
  border-radius: 8px;
  border: 1px solid #9d9d9d;
`
