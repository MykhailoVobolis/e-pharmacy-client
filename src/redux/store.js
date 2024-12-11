import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { storesReduser } from "./stores/slice.js";
import { authReduser } from "./auth/slice.js";
import { cartReduser } from "./cart/slice.js";
import { productsReduser } from "./products/slice.js";
import { filtersReduser } from "./filters/slice.js";
import { modalReducer } from "./modal/slice.js";

// Збереження токіна в Local Storage
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["accessToken", "refreshToken"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReduser);

// Початковий стан Redux
export const store = configureStore({
  reducer: {
    stores: storesReduser,
    filters: filtersReduser,
    auth: persistedAuthReducer,
    cart: cartReduser,
    products: productsReduser,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
