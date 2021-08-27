import styled, {createGlobalStyle} from 'styled-components';

import {FONT} from '@src/constants/constants';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${FONT.DEFAULT_FONT};
    font-size: ${FONT.DEFAULT_FONT_SIZE};
    padding: 0;
    margin: 0;
  }
  body {
    user-select: none;
    font-weight: normal;
  }
`

export const StyledPageWrapper = styled.div`
  margin: 0 auto;
  background-color: ${props => props.colorSpectrum.MAIN_BACKGROUND};
  width: 100%;
  height: 90vh;
  color: white;
  transition: .2s;
`;