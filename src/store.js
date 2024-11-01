import {
  combineReducers,
  configureStore,
  createAction,
} from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import authReducer from "./features/authSlice";
import themeReducer from "./features/themeSlice";
import { authApi } from "./services/authApi";
import { userApi } from "./services/userApi";
import { forexApi } from "./services/forexApi";
import { channelApi } from "./services/channelApi";

export const resetStore = createAction("RESET_STORE");

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "theme"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [forexApi.reducerPath]: forexApi.reducer,
  [channelApi.reducerPath]: channelApi.reducer,
});

const resettableReducer = (state, action) => {
  if (action.type === resetStore.type) {
    state = undefined;
  }
  return rootReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, resettableReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      authApi.middleware,
      userApi.middleware,
      channelApi.middleware,
      forexApi.middleware
    ),
});

const persistor = persistStore(store);

export { store, persistor };
