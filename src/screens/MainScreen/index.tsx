import * as S from './styles'
import CardButton from '../../components/CardButton'

const MainScreen = () => {
  return (
    <S.Wrapper>
      <S.ColumnWrapper>
        <CardButton label="Prova Final" variant="danger" />
        <CardButton label="4º Bimestre" />
      </S.ColumnWrapper>
      <CardButton width='full' label="Média Bimestral" />
    </S.Wrapper>
  )
}

export default MainScreen
