import * as S from './styles'

interface CardPropsButton {
  label: string
  isLarge?: boolean
  variant?: 'default' | 'danger'
  width?: 'default' | 'full'
  onPress?: () => void
}

const CardButton = ({ label, variant, width, onPress }: CardPropsButton) => {
  const InitialOfWords = label.split(' ').map((word) => word[0])

  return (
    <S.ButtonWrapper width={width} onPress={() => onPress && onPress()}>
      <>
        <S.ButtonAcronymContainer>
          <S.ButtonAcronymWordOne variant={variant}>
            {InitialOfWords[0]}
          </S.ButtonAcronymWordOne>
          <S.ButtonAcronymWordTwo variant={variant}>
            {InitialOfWords[1]}
          </S.ButtonAcronymWordTwo>
        </S.ButtonAcronymContainer>
        <S.ButtonLabel variant={variant}>{label}</S.ButtonLabel>
      </>
    </S.ButtonWrapper>
  )
}

export default CardButton
