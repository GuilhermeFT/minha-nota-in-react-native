import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Text } from 'react-native'

const TwoMonthsCalculatorScreen = () => {
  const { push } = useNavigation<NativeStackNavigationProp<any>>()
  return (
    <S.Wrapper>
      <Text>Média bimestral</Text>
    </S.Wrapper>
  )
}

export default TwoMonthsCalculatorScreen
