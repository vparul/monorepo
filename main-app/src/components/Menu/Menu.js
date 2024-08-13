import React from "react";
import SubMenu from "../SubMenu";

const Menu = ({ applications, onMenuClick }) => {
  return (
    <div className="menu-container">
      {applications.map((app) => (
        <div key={app.id} className="menu-item">
          <span>{app.menuItem.label}</span>
          <SubMenu
            subMenu={app.menuItem.subMenu}
            app={app}
            onMenuClick={onMenuClick}
          />
        </div>
      ))}
    </div>
  );
};

export default Menu;
