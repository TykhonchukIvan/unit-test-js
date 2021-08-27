import styled, {createGlobalStyle, keyframes} from 'styled-components';

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  width: 100%;
  min-height: 10vh;
  background-color: ${props => props.background};
`
