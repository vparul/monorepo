import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Menu from './components/Menu';
import ViewPanel from './components/ViewPanel';
import menuConfig from './config/menuConfig.json';

const App = () => {
    const [selectedApp, setSelectedApp] = useState(null);
    const [selectedComponentName, setSelectedComponentName] = useState(null);
    const [selectedComponentVersion, setSelectedComponentVersion] = useState('v1');

    const handleMenuClick = (app) => {
        setSelectedApp(app);
        setSelectedComponentName(app.components[0].name);
        setSelectedComponentVersion(app.components[0].versions[0]);
    };

    const handleVersionChange = (version) => {
        setSelectedComponentVersion(version);
    };

    return (
        <Provider store={store}>
            <div>
                <h1>My App</h1>
                <Menu applications={menuConfig.applications} onMenuClick={handleMenuClick} />
                {selectedApp && (
                    <div>
                        <h3>Select Version</h3>
                        {selectedApp.components.map(component =>
                            component.versions.map(version => (
                                <button key={version} onClick={() => handleVersionChange(version)}>
                                    {version}
                                </button>
                            ))
                        )}
                    </div>
                )}
                <ViewPanel selectedApp={selectedApp} selectedComponentName={selectedComponentName} selectedComponentVersion={selectedComponentVersion} />
            </div>
        </Provider>
    );
};


export default App;

