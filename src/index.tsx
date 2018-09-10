import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { ApplicationState } from './store';

import './index.css';
import 'typeface-roboto';

import ThemedApp from './layout/application/ThemedApp';
import { InitialState as UiInitialState } from './store/ui/types';

const initiState: ApplicationState = {
  ui: { ...UiInitialState }
};

const store = configureStore(initiState);

const app = (
  <Provider store={store}>
    <ThemedApp />
  </Provider>
);

const rootEl = document.getElementById('root') as HTMLElement;

ReactDOM.render(app, rootEl);
registerServiceWorker();
