"use client";
import { setupListeners } from "@reduxjs/toolkit/query";
import { makeStore } from "@/lib/store";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import type { ReactNode } from "react";

export function StoreProvider({ children }: { children: ReactNode }) {
  const [store] = useState(() => makeStore());

  useEffect(() => {
    const unsubscribe = setupListeners(store.dispatch);
    return unsubscribe;
  }, [store]);

  return <Provider store={store}>{children}</Provider>;
}
