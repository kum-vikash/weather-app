import React, { createContext, useState } from "react";

export const NavLinkContext = createContext();
const NavLinkState = ({ children }) => {
  const [navLink] = useState([
    {
      name: "Current",
      link: "#current",
    },
    {
      name: "Forecast",
      link: "#forecast",
    },
  ]);
  return (
    <NavLinkContext.Provider value={{ navLink }}>
      {children}
    </NavLinkContext.Provider>
  );
};

export default NavLinkState;
