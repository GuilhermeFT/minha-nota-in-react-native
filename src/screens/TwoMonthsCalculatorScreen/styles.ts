import { SwipeListView } from 'react-native-swipe-list-view'
import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.white};
  padding: 0 0;
`

export const TextResult = styled.Text`
  height: 68px;
  font-size: 48px;
  text-align: right;
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: 0 16px;
  width: 100%;
  font-family: 'Roboto_400Regular';
`

export const StatusText = styled.Text`
  width: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.quinary};
  text-align: right;
  padding: 8px 16px;
  font-family: 'Roboto_700Bold';
`

export const ListWrapper = styled.View`
  padding: 16px 0;
  background-color: ${({ theme }) => theme.colors.background.white};
`

export const List = styled(SwipeListView)`
  width: 100%;
  max-height: 210px;
`

export const StyledNoteInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.background.white};
  padding: 16px;
  height: 54px;
  width: 72%;
  border-radius: 8px;
  border: 1px solid #9d9d9d;
`

export const StyledWeightInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.background.white};
  padding: 16px;
  height: 54px;
  width: 25%;
  border-radius: 8px;
  border: 1px solid #9d9d9d;
`

export const InputGroup = styled.View`
  background-color: ${({ theme }) => theme.colors.background.white};
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-bottom: 8px;
  padding: 0 16px;
`

export const TextInstructions = styled.Text`
  width: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.quinary};
  text-align: center;
  padding: 8px 16px;
  font-family: 'Roboto_400Regular';
`

export const ButtonWrapper = styled.View`
  width: 100%;
  padding: 16px;
`

export const AddButton = styled.TouchableOpacity`
  width: 100%;
  border-radius: 8px;
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.background.blue};
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text.white};
  font-size: 24px;
  text-align: center;
`

export const DeleteButton = styled.View`
  background-color: ${({ theme }) => theme.colors.background.red};
  padding: 8px;
  align-items: center;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`

export const DeleteButtonText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.white};
  font-family: 'Roboto_700Bold';
  text-align: right;
  width: 100%;
`
