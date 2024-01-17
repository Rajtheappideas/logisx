import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import GlobalStates from "./globalStates";
import AuthSlice from "./AuthSlice";
import GetContentSlice from "./GetContentSlice";
import BidSlice from "./BidSlice";
import DocumentSlice from "./DocumentSlice";
import FavoriteSlice from "./FavoriteSlice";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const authConfig = {
  key: "auth",
  storage,
  blacklist: ["showSignupProcess"],
};
const globalStatesConfig = {
  key: "globalStates",
  storage,
  blacklist: [
    "fcmToken",
    "addresses",
    "addressLoading",
    "DeleteAddressLoading",
  ],
};

const rootReducer = combineReducers({
  globalStates: persistReducer(globalStatesConfig, GlobalStates),
  auth: persistReducer(authConfig, AuthSlice),
  content: GetContentSlice,
  bid: BidSlice,
  documents: DocumentSlice,
  favorite: FavoriteSlice,
});

const persisteRoot = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: { root: persisteRoot },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  // devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
