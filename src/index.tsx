import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {storeConfig} from '@src/redux/storeConfig';

import App from './App';

const Main: FC = () =>
  <Provider store={storeConfig}>
    <App/>
  </Provider>

ReactDOM.render(<Main/>, document.querySelector('#root'));