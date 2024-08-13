import React, { useState } from "react";

import "./SubMenu.css";

const SubMenu = ({ subMenu, app, onMenuClick, selectedComponent }) => {
  const [selectedComponentVersion, setSelectedComponentVersion] =
    useState(null);

  const handleComponentClick = (component, version) => {
    setSelectedComponentVersion(version);
    onMenuClick(app, component, version);
  };

  return (
    <div className="sub-menu">
      {subMenu.map((subMenuItem) => (
        <div key={subMenuItem.label} className="sub-menu-item">
          <span className="sub-menu-label">{subMenuItem.label}</span>
          <div className="component-list">
            {subMenuItem.components.map((component) => (
              <div key={component.name} className="component-item">
                <span className="component-name">{component.name}</span>
                <div className="version-list">
                  {component.versions.map((version) => (
                    <div
                      key={version}
                      className={`version-item ${
                        selectedComponent?.name === component.name &&
                        selectedComponentVersion === version
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleComponentClick(component, version)}
                    >
                      {version}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
