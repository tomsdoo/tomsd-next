import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { visitedPagesSlice } from "@/lib/slices/visited-pages";

const rootReducer = combineSlices(visitedPagesSlice);

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type AppStore = ReturnType<typeof makeStore>;
