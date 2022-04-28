import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.white};
  padding: 34px 12px;
`

export const ColumnWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const TextLink = styled.Text`
  margin-top: 34px;
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: 14px;
  text-decoration: underline;
`
