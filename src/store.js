import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from './reducers'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
  let store = createStore(persistedReducer, composeWithDevTools())
  let persistor = persistStore(store)
  return { store, persistor }
}
