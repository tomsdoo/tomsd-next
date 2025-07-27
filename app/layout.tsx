import "destyle.css";
import "@/styles/all.css";
import type { ReactNode } from "react";
import { StoreProvider } from "@/app/store-provider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <html>
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
}
