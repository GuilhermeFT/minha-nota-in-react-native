import { Dimensions, Platform } from 'react-native'
import styled from 'styled-components/native'

import colors from '../../styles/colors'

export const SafeArea = styled.SafeAreaView`
  flex: 1;

  margin-top: ${Platform.OS === 'android' ? 38 + 25 : 38}px;
`

export const Container = styled.View`
  flex: 1;

  align-items: center;

  padding: 120px 30px 0px;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: center;
`

export const TitleContainer = styled.View`
  width: ${Dimensions.get('window').width * 0.75}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  width: 65%;

  color: #ffffff;
  font-size: 24px;
  font-weight: 700;

  flex-direction: row;
`

export const Emoji = styled.Text`
  font-size: 32px;
  width: 35%;

  text-align: center;
`

export const Input = styled.TextInput`
  margin: 50px 0 40px;
  width: ${Dimensions.get('window').width * 0.75}px;
  height: 58px;

  border-bottom-width: 1px;
  border-bottom-color: ${colors.textPlaceholder};

  color: ${colors.white};
`
