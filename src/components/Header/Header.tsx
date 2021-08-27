import React from 'react';
import {connect} from 'react-redux';

import {IHeaderProps} from '@src/components/Header/types';

import {RootState} from '@src/redux/storeConfig';
import {appStore} from '@src/redux/app/selector';

import {StyledHeaderWrapper} from '@src/components/Header/styled';


const Header = ({children, colorSpectrum}:IHeaderProps) => {
  return(
    <StyledHeaderWrapper background={colorSpectrum.HEADER_BACKGROUND}>
      {children}
    </StyledHeaderWrapper>
  )
}

const mapStateToProps = (state: RootState) => ({
  colorSpectrum: appStore.getColorSpectrum(state)
});


export default connect(mapStateToProps, null)(Header);