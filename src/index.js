import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { DeviceScreenProvider } from './components/DeviceScreenProvider';
import { AppModalProvider } from './components/modal/AppModalProvider';
import { AppModalConsumer } from './components/modal/AppModalConsumer';

ReactDOM.render(
  <Provider store={configureStore()}>
    <DeviceScreenProvider>
      <App />
    </DeviceScreenProvider>
    <AppModalProvider>
      <AppModalConsumer />
    </AppModalProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
