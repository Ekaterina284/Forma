import './i18n';
import registerServiceWorker from './registerServiceWorker';
import store from './Redux/redux-store';

import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import App from './App';

let rerenderEntireTree = state => {
  ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} />,
    document.getElementById('root')
  );
};

//   ReactDOM.render(
//     <App state={state} addCategory={addCategory} />,
//     document.getElementById('root')
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

rerenderEntireTree(store.getState);
registerServiceWorker();
