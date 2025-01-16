import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider as ChakraProvider } from "./app/components/shared/provider.tsx";
import { Provider } from "react-redux";
import { store } from "./app/redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
  // </React.StrictMode>
);
