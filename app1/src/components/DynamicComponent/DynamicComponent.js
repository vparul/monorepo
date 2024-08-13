import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';

const DynamicComponent = ({ app }) => {
    console.log(app);
    // Assuming app names correspond to the remote entry points
    const RemoteApp = React.lazy(() => import("app2/App"));

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RemoteApp />
        </Suspense>
    );
};

export default DynamicComponent;
