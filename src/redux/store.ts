import { configureStore } from "@reduxjs/toolkit";
import { index } from "./userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { selectedUserSlice } from '@/redux/selectedUser';

export const store = configureStore({
  reducer: {
    selectedUser: selectedUserSlice.reducer,
    [index.reducerPath]: index.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([index.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
