import React, { lazy } from 'react';

const componentMapping = {
    'ArticleManagerV1': lazy(() => import('contentManagement/ArticleManagerV1')),
    'ArticleManagerV2': lazy(() => import('contentManagement/ArticleManagerV2')),
    'MediaManagerV1': lazy(() => import('contentManagement/MediaManagerV1')),
    'MediaManagerV2': lazy(() => import('contentManagement/MediaManagerV2')),
    'UserInsightsV1': lazy(() => import('analytics/UserInsightsV1')),
    'UserInsightsV2': lazy(() => import('analytics/UserInsightsV2')),
    'TrafficReportsV1': lazy(() => import('analytics/TrafficReportsV1')),
    'TrafficReportsV2': lazy(() => import('analytics/TrafficReportsV2')),
};

export const getComponent = (componentName, version) => {
    const fullComponentName = `${componentName}${version}`;
    return componentMapping[fullComponentName] || null;
};
