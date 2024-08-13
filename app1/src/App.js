// import React, {Suspense} from "react";
// const RemoteApp = React.lazy(() => import("app2/App"));

// const App = () => {
//   return (
//     <div>
//       <div style={{
//         margin:"10px",
//         padding:"10px",
//         textAlign:"center",
//         backgroundColor:"greenyellow"
//       }}>
//         <h1>App1</h1>
//       </div>
//       <Suspense fallback={"loading..."}>
//         <RemoteApp/>
//       </Suspense>
//     </div>)
// }


// export default App;

import React, { useEffect, useState } from 'react';
import menuConfig from './config/menuConfig.json';
import Menu from './components/Menu/Menu';
import ViewPanel from './components/ViewPanel/ViewPanel';

const App = () => {
    const [applications] = useState(menuConfig.applications);
    const [selectedApp, setSelectedApp] = useState(null);

    const handleMenuClick = (app) => {
        setSelectedApp(app);
    };

    return (
        <div>
            <h1>My App</h1>
            <Menu applications={applications} onMenuClick={handleMenuClick} />
            <ViewPanel applications={applications} selectedApp={selectedApp} />
        </div>
    );
};

export default App;

