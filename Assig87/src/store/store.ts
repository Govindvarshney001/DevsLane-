import { createStore } from 'redux';
import emotionReducer from './reducer';

const store = createStore(emotionReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;