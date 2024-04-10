
import React from 'react'
import ReactDOM from "react-dom/client";
import App from '../ClientSide/src/App';
import { HashRouter } from 'react-router-dom';
import ContextProviders from "../ClientSide/src/Context/index"

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement);
root.render(
  <HashRouter>
    <ContextProviders>
      <App />
    </ContextProviders>
  </HashRouter>
);