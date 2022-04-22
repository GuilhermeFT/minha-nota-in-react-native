import * as S from './styles'
import CardButton from '../../components/CardButton'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const MainScreen = () => {
  const { push } = useNavigation<NativeStackNavigationProp<any>>()
  return (
    <S.Wrapper>
      <S.ColumnWrapper>
        <CardButton
          label="Prova Final"
          variant="danger"
          onPress={() => push('Prova Final')}
        />
        <CardButton
          label="4º Bimestre"
          onPress={() => push('Último Bimestre')}
        />
      </S.ColumnWrapper>
      <CardButton
        width="full"
        label="Média Bimestral"
        onPress={() => push('Média Bimestral')}
      />
    </S.Wrapper>
  )
}

export default MainScreen
