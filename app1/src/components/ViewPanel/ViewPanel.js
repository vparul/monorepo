import React from 'react';
import DynamicComponent from '../DynamicComponent/DynamicComponent';

const ViewPanel = ({ selectedApp, selectedComponentName, selectedComponentVersion }) => {
    console.log()
    return (
        <div>
            <h2>View Panel</h2>
            {selectedApp ? (
                <div>
                    <h3>{selectedApp.menuItem.label}</h3>
                    <DynamicComponent
                        appName={selectedApp.name}
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
