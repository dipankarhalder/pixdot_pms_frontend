import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import { store } from "./store";
import { routers } from "./router";
import { theme } from "./styles/theme";
import { GlobalFont } from "./styles/globalFont";
import { GlobalStyle } from "./styles/globalStyle";

const root = document.getElementById("root");
if (root) {
  const rootReturn = createRoot(root);
  rootReturn.render(
    <StrictMode>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalFont />
          <GlobalStyle />
          <RouterProvider router={routers} />
        </ThemeProvider>
      </ReduxProvider>
    </StrictMode>
  );
} else {
  throw new Error(
    "The document does not contain an element with the ID 'root'."
  );
}
