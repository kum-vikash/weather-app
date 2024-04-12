import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavLinkContext } from "../../contexts/NavLinkState";
import { CurrentDataContext } from "../../contexts/CurrentDataState";

const Nav = () => {
  const { navLink } = useContext(NavLinkContext);
  const { search, error } = useContext(CurrentDataContext);
  return (
    <nav>
      <ul className="sm:flex gap-4 hidden font-semibold text-lg">
        {search > 0 &&
          !error &&
          navLink.map((link, index) => (
            <li key={index}>
              <AnchorLink
                href={link.link}
                className="p-2 hover:bg-blue-200 hover:text-black rounded-lg "
              >
                {link.name}
              </AnchorLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;
