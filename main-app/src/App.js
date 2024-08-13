import React, { useState } from "react";
import { Provider, useDispatch } from "react-redux";

import store, { clearMessage } from "./store";
import Menu from "./components/Menu";
import ViewPanel from "./components/ViewPanel";
import menuConfig from "./config/menuConfig.json";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const [selectedApp, setSelectedApp] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedComponentVersion, setSelectedComponentVersion] =
    useState("V1");

  const handleMenuClick = (app, component, version) => {
    setSelectedApp(app);
    setSelectedComponent(component);
    setSelectedComponentVersion(version || component.versions[0]);
    dispatch(clearMessage());
  };

  return (
    <Provider store={store}>
      <div className="app-container">
        <header className="app-header">
          <h1>Application Dashboard</h1>
        </header>
        <div className="app-body">
          <Menu
            applications={menuConfig.applications}
            onMenuClick={handleMenuClick}
            selectedComponent={selectedComponent}
          />
          <ViewPanel
            selectedApp={selectedApp}
            selectedComponentName={selectedComponent?.name}
            selectedComponentVersion={selectedComponentVersion}
          />
        </div>
      </div>
    </Provider>
  );
};

export default App;
