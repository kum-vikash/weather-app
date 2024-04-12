import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import CurrentDataState from "./contexts/CurrentDataState";
import SearchLocState from "./contexts/SearchLocState";
import NavLinkState from "./contexts/NavLinkState";
import DataListState from "./contexts/DataListState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataListState>
      <NavLinkState>
        <SearchLocState>
          <CurrentDataState>
            <RouterProvider router={router} />
          </CurrentDataState>
        </SearchLocState>
      </NavLinkState>
    </DataListState>
  </React.StrictMode>
);
