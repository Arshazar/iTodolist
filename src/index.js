import React from 'react'
import ReactDOM from 'react-dom'
import store, { persistor } from './reducers/index'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)
