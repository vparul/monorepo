import React from "react";
import SubMenu from "../SubMenu";
import "./Menu.css";

const Menu = ({ applications, onMenuClick, selectedComponent }) => (
  <div className="menu">
    {applications.map((app) => (
      <div key={app.id} className="menu-item">
        <span className="menu-label">{app.menuItem.label}</span>
        <SubMenu
          subMenu={app.menuItem.subMenu}
          app={app}
          onMenuClick={onMenuClick}
          selectedComponent={selectedComponent}
        />
      </div>
    ))}
  </div>
);

export default Menu;
