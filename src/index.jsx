import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import reducer from './pages/search-hotels/reducres';
import saga from './pages/search-hotels/saga';

const enhancer = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    enhancer,
  ),
);

sagaMiddleware.run(saga);


render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
