import React from 'react';
import { Provider } from 'react-redux';

import AppContainer from './navigation/AppContainer';
import store from './store/configureStore';

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
