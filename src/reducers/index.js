import { combineReducers, createStore } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
    key: 'todos',
    version: 1,
    storage: storage,
    stateReconciler: hardSet,
}

const reducers = combineReducers({
    todos,
    visibilityFilter,
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
    persistedReducer,
    ['todo'],
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(store)

export default store
