import React from 'react';
import {Navigation} from './src/navigation/Navigations';
import {store} from './src/app/store';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </PaperProvider>
  );
};

export default App;
