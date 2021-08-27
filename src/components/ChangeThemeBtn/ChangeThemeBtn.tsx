import React, {Component} from 'react';
import {connect} from 'react-redux';

import {ChangeThemeBtnWrap} from '@src/components/ChangeThemeBtn/styled';
import {AppDispatch, RootState} from '@src/redux/storeConfig';

import {appStore} from '@src/redux/app/selector';
import {appActions} from '@src/redux/app/reducer';

import {IChangeThemeColorsAction} from '@src/redux/app/types';
import {IChangeThemeBtnProps} from '@src/components/ChangeThemeBtn/type';
import {themes} from '@src/constants/constants';


class ChangeThemeBtn extends Component<IChangeThemeBtnProps, {}> {
  constructor(props: IChangeThemeBtnProps) {
    super(props);
    this.state = {}
    this.onClickBtn = this.onClickBtn.bind(this)
  }

  onClickBtn(): void {
    this.props.changeThemeColors(themes[this.props.colorTheme]);
  }

  render() {

    return (
      <>
        <ChangeThemeBtnWrap>
          <button onClick={this.onClickBtn}>dfsfsd</button>
        </ChangeThemeBtnWrap>
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  colorTheme: appStore.getColorTheme(state),
  colorSpectrum: appStore.getColorSpectrum(state)
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  changeThemeColors: (theme: IChangeThemeColorsAction) => dispatch(appActions.changeThemeColors(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeThemeBtn);