import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import rootReducer from "./reducers";

export const store = configureStore({
    reducer: rootReducer,
});

setupListeners(store.dispatch);
