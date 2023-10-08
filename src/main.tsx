import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import { GlobalStyle } from "./style.ts";
import FieldHero from "./pages/CreatePage/components/FormFields/FieldHero/index.tsx"; 
import FormPrompt from "./pages/CreatePage/components/Form/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    //apontar pra landingpage
  },
  {
    path: "/infinityStory",
    element: <FieldHero/>,
    //apontar pra plataforma
  },
  {
    path: '/selectStory',
    element: <FormPrompt/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
<GlobalStyle />
      <RouterProvider router={router} />
  </React.StrictMode>
);
