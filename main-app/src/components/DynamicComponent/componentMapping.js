import React, { lazy } from 'react';

const componentMapping = {
    'ArticleManagerV1': lazy(() => import('app2/ArticleManagerV1')),
    'ArticleManagerV2': lazy(() => import('app2/ArticleManagerV2')),
    'MediaManagerV1': lazy(() => import('app2/MediaManagerV1')),
    'MediaManagerV2': lazy(() => import('app2/MediaManagerV2')),
    'UserInsightsV1': lazy(() => import('app3/UserInsightsV1')),
    'UserInsightsV2': lazy(() => import('app3/UserInsightsV2')),
    'TrafficReportsV1': lazy(() => import('app3/TrafficReportsV1')),
    'TrafficReportsV2': lazy(() => import('app3/TrafficReportsV2')),
};

export const getComponent = (componentName, version) => {
    const fullComponentName = `${componentName}${version}`;
    return componentMapping[fullComponentName] || null;
};
