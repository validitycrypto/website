import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './state';
import Aeon from './aeon';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Aeon />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
