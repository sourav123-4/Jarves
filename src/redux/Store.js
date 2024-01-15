import {setupListeners} from '@reduxjs/toolkit/query';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import CounterReducer from './slices/CounerSlice';
// import apiSlice from './apiSlice';
// import userReducer from './user/userSlice';

// const rootReducer = combineReducers({
//   user: userReducer,
//   [apiSlice.reducerPath]: apiSlice.reducer,
// });

export const store = configureStore({
  reducer: {
    couner : CounterReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat([apiSlice.middleware]),
});

setupListeners(store.dispatch);
