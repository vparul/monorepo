import React from 'react';
import DynamicComponent from '../DynamicComponent/DynamicComponent';

const ViewPanel = ({ selectedApp }) => {
    return (
        <div>
            <h2>View Panel</h2>
            {selectedApp ? (
                <div>
                    <h3>{selectedApp.menuItem.label}</h3>
                    <DynamicComponent app={selectedApp.menuItem} />
                </div>
            ) : (
                <p>Select an application from the menu.</p>
            )}
        </div>
    );
};

export default ViewPanel;
