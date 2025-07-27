import { createAppSlice } from "@/lib/create-app-slice";
import type { PayloadAction } from "@reduxjs/toolkit";

export const visitedPagesSlice = createAppSlice({
  name: "visited-pages",
  initialState: {
    visitedPageMap: {},
  },
  reducers: (create) => ({
    visit: create.reducer((state, action: PayloadAction<string>) => {
      state.visitedPageMap[action.payload] = true;
    }),
  }),
  selectors: {
    selectPageMap(state) {
      return state.visitedPageMap;
    },
  },
});

export const { visit } = visitedPagesSlice.actions;

export const { selectPageMap } = visitedPagesSlice.selectors;
