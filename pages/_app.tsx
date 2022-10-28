import { ReactElement } from "react";
import "destyle.css";
import "@/styles/all.css";

function App({ Component, pageProps }): ReactElement {
  return <Component {...pageProps} />;
}

export default App;
