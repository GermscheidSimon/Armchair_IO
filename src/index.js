import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './redux/reducers/_root.reducer'; // imports ./redux/reducers/index.js
import rootSaga from './redux/sagas/_root.saga'; // imports ./redux/sagas/index.js

import App from './components/App/App';

const sagaMiddleware = createSagaMiddleware();

const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware] :
  [sagaMiddleware];

const store = createStore(
  rootReducer,

  applyMiddleware(...middlewareList),
);


sagaMiddleware.run(rootSaga);

ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
  document.getElementById('react-root'),
);
