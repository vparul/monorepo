import React from "react";

const SubMenu = ({ subMenu, app, onMenuClick }) => {
  return (
    <div className="sub-menu">
      {subMenu.map((subMenuItem) => (
        <div key={subMenuItem.label} className="sub-menu-item">
          <span>{subMenuItem.label}</span>
          <div className="component-list">
            {subMenuItem.components.map((component) => (
              <div
                key={component.name}
                className="component-item"
                onClick={() => onMenuClick(app, component)}
              >
                {component.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
