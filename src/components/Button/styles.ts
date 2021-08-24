import styled, { css } from 'styled-components/native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const ButtonContainer = styled.TouchableOpacity`
  width: 90%;
  height: 58px;

  border-radius: 16px;

  align-items: center;
  justify-content: center;

  background: ${colors.blue};

  ${props =>
    props.disabled
      ? css`
          opacity: 0.5;
        `
      : css``}
`
export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 17px;
  font-weight: 600;
  font-family: ${fonts.buttonText};
`
