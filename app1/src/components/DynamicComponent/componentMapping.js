import React, { lazy } from 'react';

const componentMapping = {
    'RegistrationFormV1': lazy(() => import('app2/RegistrationFormV1')),
    'RegistrationFormV2': lazy(() => import('app2/RegistrationFormV2')),
    'LoginFormV1': lazy(() => import('app3/LoginFormV1')),
    'LoginFormV2': lazy(() => import('app3/LoginFormV2')),
};

export const getComponent = (appName, componentName, version) => {
    const fullComponentName = `${componentName}${version}`;
    return componentMapping[fullComponentName] || null;
};
