import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Dimensions, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { SwipeRow } from 'react-native-swipe-list-view'

const TwoMonthsCalculatorScreen = () => {
  const [finalNote, setFinalNote] = useState(0)
  const [status, setStatus] = useState('')

  const [notes, setNotes] = useState([
    {
      note: '10',
      weight: '10'
    },
    {
      note: '10',
      weight: '10'
    }
  ])

  useEffect(() => {
    const result =
      (notes.reduce((acc, curr) => {
        return acc + Number(curr.note || 0) * (Number(curr.weight || 0) / 10)
      }, 0) /
        notes.length) *
      0.8

    setFinalNote(result)
  }, [notes])

  return (
    <S.Wrapper>
      <S.TextResult>{finalNote.toFixed(2)}</S.TextResult>
      <S.StatusText>{status}</S.StatusText>

      <S.ListWrapper>
        <S.List
          data={notes}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => {
            const { note, weight } = item as typeof notes[0]
            const newNotes = [...notes]

            return (
              <SwipeRow
                disableRightSwipe
                disableLeftSwipe={index === 0}
                rightOpenValue={-Dimensions.get('window').width}
                onSwipeValueChange={(data) => {
                  const { value } = data
                  if (
                    value < -Dimensions.get('window').width &&
                    notes.length > 1
                  ) {
                    const newNotes = notes.filter((_note, i) => i !== index)

                    setNotes(newNotes)
                  }
                }}
              >
                <S.DeleteButton>
                  <S.DeleteButtonText>Delete</S.DeleteButtonText>
                </S.DeleteButton>

                <S.InputGroup>
                  <S.StyledNoteInput
                    value={note}
                    placeholder={'Avaliação ' + (index + 1)}
                    keyboardType="number-pad"
                    onChangeText={(v) => {
                      const nValue = Number(v)
                      if (
                        !isNaN(nValue) &&
                        nValue >= 0 &&
                        nValue <= 10 &&
                        v.length <= 4
                      ) {
                        newNotes[index].note = v

                        setNotes(newNotes)
                      }
                    }}
                  />
                  <S.StyledWeightInput
                    value={weight}
                    placeholder="Peso"
                    keyboardType="number-pad"
                    onChangeText={(v) => {
                      const nValue = Number(v)
                      if (
                        !isNaN(nValue) &&
                        nValue >= 0 &&
                        nValue <= 10 &&
                        v.length <= 4
                      ) {
                        newNotes[index].weight = v

                        setNotes(newNotes)
                      }
                    }}
                  />
                </S.InputGroup>
              </SwipeRow>
            )
          }}
        />
      </S.ListWrapper>

      <S.TextInstructions>
        Arraste para a esquerda para remover uma nota
      </S.TextInstructions>

      <S.ButtonWrapper>
        <S.AddButton
          activeOpacity={0.9}
          onPress={() => {
            setNotes([...notes, { note: '', weight: '' }])
          }}
        >
          <S.ButtonText>Adicionar avaliação</S.ButtonText>
        </S.AddButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default TwoMonthsCalculatorScreen
