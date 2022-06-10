import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {allReducers} from './allReducer';

const config = {
  key: 'persist',
  storage: AsyncStorage,
  timeout: null,
};

const persistedReducer = persistReducer(config, allReducers);
const allMiddlewares = applyMiddleware();

export const store = createStore(persistedReducer, {}, allMiddlewares);
export const Persistor = persistStore(store);
