import * as S from './styles'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const BackButton = () => {
  const { goBack } = useNavigation()
  return (
    <S.ButtonWrapper onPress={goBack}>
      <Ionicons name="arrow-back-outline" size={20} color="#9D9D9D" />
    </S.ButtonWrapper>
  )
}

export default BackButton
