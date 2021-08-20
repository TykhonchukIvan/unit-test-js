import styled, {createGlobalStyle, css} from 'styled-components';

export const FONT = {
  DEFAULT_FONT: 'Roboto, sans-serif',
  DEFAULT_FONT_SIZE: '12px',
};

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
    background-color: ${props => props.colorSpectrum.MAIN_BACKGROUND};
  }
`

export const StyledPageWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  height: 50px;
  color: white;
  border: 1px solid red;
`;