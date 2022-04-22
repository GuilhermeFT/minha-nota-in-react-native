import * as S from './styles'
import CardButton from '../../components/CardButton'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Text } from 'react-native'
import { useEffect, useState } from 'react'

const FourCalculatorScreen = () => {
  // create three states to store final note
  const [finalNote, setFinalNote] = useState(0)
  const [firstNote, setFirstNote] = useState('')
  const [secondNote, setSecondNote] = useState('')
  const [thirdNote, setThirdNote] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    if (!firstNote && !secondNote && !thirdNote) {
      setFinalNote(0)
      setStatus('')
      return
    }

    const bim1 = Number(firstNote || 0)
    const bim2 = Number(secondNote || 0)
    const bim3 = Number(thirdNote || 0)

    const result = (60 - (bim1 * 2 + bim2 * 2 + bim3 * 3)) / 3

    setFinalNote(result)

    if (result <= 0) {
      setStatus(
        `Parabéns, você passou com: ${(result * -1).toFixed(1)} de sobra!`
      )
    } else {
      setStatus(`Você precisa de ${result.toFixed(2)} no 4º bimestre!`)
    }
  }, [firstNote, secondNote, thirdNote])

  return (
    <S.Wrapper>
      <S.TextResult>{finalNote.toFixed(2)}</S.TextResult>
      <S.StatusText>{status}</S.StatusText>
      <S.EditorWrapper>
        <S.StyledTextInput
          value={firstNote}
          placeholder="Média 1º Bimestre"
          keyboardType="number-pad"
          onChangeText={(v) => {
            const nValue = Number(v)
            if (
              !isNaN(nValue) &&
              nValue >= 0 &&
              nValue <= 10 &&
              v.length <= 4
            ) {
              setFirstNote(v)
            }
          }}
        />
        <S.StyledTextInput
          value={secondNote}
          placeholder="Média 2º Bimestre"
          keyboardType="number-pad"
          onChangeText={(v) => {
            const nValue = Number(v)
            if (
              !isNaN(nValue) &&
              nValue >= 0 &&
              nValue <= 10 &&
              v.length <= 4
            ) {
              setSecondNote(v)
            }
          }}
        />
        <S.StyledTextInput
          value={thirdNote}
          placeholder="Média 3º Bimestre"
          keyboardType="number-pad"
          onChangeText={(v) => {
            const nValue = Number(v)
            if (
              !isNaN(nValue) &&
              nValue >= 0 &&
              nValue <= 10 &&
              v.length <= 4
            ) {
              setThirdNote(v)
            }
          }}
        />
      </S.EditorWrapper>
    </S.Wrapper>
  )
}

export default FourCalculatorScreen
