import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Aeon from './aeon';

const App = () => (
    <BrowserRouter>
      <Aeon />
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
