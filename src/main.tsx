import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import { GlobalStyle } from "./style.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    //apontar pra landingpage
  },
  {
    path: "/infinityStory",
    element: <App/>,
    //apontar pra plataforma
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<GlobalStyle />
      <RouterProvider router={router} />
  </React.StrictMode>
);
