import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMW from 'redux-saga';
import reducers from './reducers';
import App from './components/AppContainer';
import { watcherSaga } from './saga';

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMW = createSagaMW();

const store = createStore(
    reducers,
    compose(applyMiddleware(sagaMW), reduxDevTools)
);

sagaMW.run(watcherSaga);

render((
    <Provider store={store} >
        <App />
    </Provider>
), document.getElementById('root'));

