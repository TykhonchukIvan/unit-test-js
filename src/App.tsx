import React from 'react';
import {connect} from 'react-redux';

import {RootState} from '@src/redux/storeConfig';
import {appStore} from '@src/redux/app/selector';
import {GlobalStyle, StyledPageWrapper} from '@src/styled';

interface IAppProps {
  colorTheme: string
  colorSpectrum: Record<string, string>
}

const App = ({colorTheme, colorSpectrum}: IAppProps) => {
  return (
    <>
      <GlobalStyle colorSpectrum={colorSpectrum}/>
      <StyledPageWrapper>

      </StyledPageWrapper>
    </>

  )
}

const mapStateToProps = (state: RootState) => ({
  colorTheme: appStore.getColorTheme(state),
  colorSpectrum: appStore.getColorSpectrum(state)
});

const mapDispatchToProps = () => {

};

export default connect(mapStateToProps, null)(App);