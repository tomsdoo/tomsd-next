"use client";
import { setupListeners } from "@reduxjs/toolkit/query";
import { makeStore } from "@/lib/store";
import { useRef, useEffect } from "react";
import { Provider } from "react-redux";
import type { ReactNode } from "react";
import type { AppStore } from "@/lib/store";

export function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    if (storeRef.current == null) {
      return;
    }
    const unsubscribe = setupListeners(storeRef.current.dispatch);
    return unsubscribe;
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
