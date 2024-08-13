import React from "react";
import DynamicComponent from "../DynamicComponent/DynamicComponent";

import "./ViewPanel.css";

const ViewPanel = ({
  selectedApp,
  selectedComponentName,
  selectedComponentVersion,
}) => {
  return (
    <div className="view-panel">
      <h2>View Panel</h2>
      {selectedApp ? (
        <div>
          <h3>{selectedApp.menuItem.label}</h3>
          <DynamicComponent
            componentName={selectedComponentName}
            version={selectedComponentVersion}
          />
        </div>
      ) : (
        <p>Select an application from the menu.</p>
      )}
    </div>
  );
};

export default ViewPanel;
