import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Menu from './components/Menu';
import ViewPanel from './components/ViewPanel';
import menuConfig from './config/menuConfig.json';
import './App.css';

const App = () => {
    const [selectedApp, setSelectedApp] = useState(null);
    const [selectedComponentName, setSelectedComponentName] = useState(null);
    const [selectedComponentVersion, setSelectedComponentVersion] = useState('V1');

    const handleMenuClick = (app, component) => {
        setSelectedApp(app);
        setSelectedComponentName(component.name);
        setSelectedComponentVersion(component.versions[0]);
    };

    const handleVersionChange = (version) => {
        setSelectedComponentVersion(version);
    };

    return (
        <Provider store={store}>
            <div className="app-container">
                <header className="app-header">
                    <h1>Application Dashboard</h1>
                </header>
                <div className="app-body">
                    <Menu applications={menuConfig.applications} onMenuClick={handleMenuClick} />
                    <ViewPanel 
                        selectedApp={selectedApp} 
                        selectedComponentName={selectedComponentName} 
                        selectedComponentVersion={selectedComponentVersion} 
                        onVersionChange={handleVersionChange}
                    />
                </div>
            </div>
        </Provider>
    );
};

export default App;
