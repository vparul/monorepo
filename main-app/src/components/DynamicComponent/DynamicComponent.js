import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../../store';
import { getComponent } from './componentMapping';

const DynamicComponent = ({ componentName, version }) => {
    const dispatch = useDispatch();
    const message = useSelector(state => state.app.message);

    const ComponentToLoad = getComponent(componentName, version);

    const handleSetMessage = () => {
        dispatch(setMessage(`Message from ${componentName} ${version}`));
    };

    return (
        <div>
            {ComponentToLoad ? (
                <Suspense fallback={<div>Loading component...</div>}>
                    <ComponentToLoad setMessage={handleSetMessage} />
                </Suspense>
            ) : (
                <div>Component not found.</div>
            )}
            <div style={{ paddingTop: "2rem"}}>Shared Message: {message}</div>
        </div>
    );
};

export default DynamicComponent;
