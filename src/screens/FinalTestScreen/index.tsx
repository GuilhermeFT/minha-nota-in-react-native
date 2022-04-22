import * as S from './styles'
import CardButton from '../../components/CardButton'
import { useTheme } from 'styled-components'
import { useEffect, useState } from 'react'

const FinalTestScreen = () => {
  const [inputValue, setInputValue] = useState('')
  const [value, setValue] = useState(0)
  const [status, setStatus] = useState('')

  useEffect(() => {
    const note = Number(inputValue)

    note < 6 && inputValue ? setValue(10 - note) : setValue(0)
    inputValue
      ? note < 6
        ? setStatus(
            `Você precisa de ${(10 - note).toFixed(
              1
            )} pontos para passar na PF.`
          )
        : setStatus('Parabéns! Você não precisa fazer a PF.')
      : setStatus('')
  }, [inputValue])

  return (
    <S.Wrapper>
      <S.InputNote
        value={inputValue}
        autoFocus
        placeholder='Insira a Média Final'
        keyboardType="number-pad"
        onChangeText={(v) => {
          const nValue = Number(v)
          if (!isNaN(nValue) && nValue >= 0 && nValue <= 10 && v.length <= 4) {
            setInputValue(v)
          }
        }}
      />

      <S.NoteView>{value.toFixed(2)}</S.NoteView>
      <S.StatusText>{status}</S.StatusText>
    </S.Wrapper>
  )
}

export default FinalTestScreen
