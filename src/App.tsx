// //app.tsx

// import React, { useState } from 'react';
// import { ExtensionProvider } from '@looker/extension-sdk-react';
// import { hot } from 'react-hot-loader/root';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import TopNavBar from './components/TopNavBar';
// import './tailwind.css'; 
// import LookerEmbed from './components/LookerEmbed';
// import ChatComponent from './components/ChatComponent'; 
// import LoginPage from './components/LoginPage'; 
// import ExploreComponent from './components/ExploreComponent';
// import GridComponent from './components/GridComponent';
// import UserComponent from './components/UserComponent';
// import DocumentsComponent from './components/DocumentsComponent';
// import SearchComponent from './components/SearchComponent';

// const App = hot(() => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <ExtensionProvider>
//       <Router>
//         {isAuthenticated ? (
//           <div style={{ height: '100vh', width: '100vw', display: 'flex', overflow: 'hidden' }}>
//             {/* Sidebar */}
//             <Sidebar />

//             {/* Main Content Area */}
//             <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
//               {/* Top Navigation Bar */}
//               <TopNavBar />

//               {/* Content Area */}
//               <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
//                 <Switch>
//                   <Route exact path="/" component={() => (
//                     <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
//                       <LookerEmbed folderId="117" />
//                     </div>
//                   )} />
//                   <Route path="/chat" component={ChatComponent} />
//                   <Route path="/explore" component={() => (
//                     <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
//                       <ExploreComponent exploreId="care_platr/patient_healthcare_records" />
//                     </div>
//                   )} />
//                   <Route path="/grid" component={GridComponent} />
//                   <Route path="/user" component={UserComponent} />
//                   <Route path="/documents" component={DocumentsComponent} /> 
//                   <Route path="/search" component={SearchComponent} />
                  
//                   {/* Add other routes here */}
//                   <Redirect from="*" to="/" /> {/* Redirect unknown routes to home */}
//                 </Switch>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <Switch>
//             <Route path="/login">
//               <LoginPage setIsAuthenticated={setIsAuthenticated} />
//             </Route>
//             <Redirect to="/login" />
//           </Switch>
//         )}
//       </Router>
//     </ExtensionProvider>
//   );
// });

// export default App;


//api added :
// App.tsx
import React, { useState } from 'react';
import { ExtensionProvider } from '@looker/extension-sdk-react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNavBar from './components/TopNavBar';
import './tailwind.css'; 
import LookerEmbed from './components/LookerEmbed';
import ChatComponent from './components/ChatComponent'; 
import LoginPage from './components/LoginPage'; 
import ExploreComponent from './components/ExploreComponent';
import GridComponent from './components/GridComponent';
import UserComponent from './components/UserComponent';
import DocumentsComponent from './components/DocumentsComponent';
import SearchComponent from './components/SearchComponent';
import APIComponent from './components/APIComponent';


const App = hot(() => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ExtensionProvider>
      <Router>
        {isAuthenticated ? (
          <div style={{ height: '100vh', width: '100vw', display: 'flex', overflow: 'hidden' }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              {/* Top Navigation Bar */}
              <TopNavBar />

              {/* Content Area */}
              <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
                <Switch>
                  <Route exact path="/" component={() => (
                    <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
                      <LookerEmbed folderId="117" />
                    </div>
                  )} />
                  <Route path="/chat" component={ChatComponent} />
                  <Route path="/explore" component={() => (
                    <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
                      <ExploreComponent exploreId="care_platr/patient_healthcare_records" />
                    </div>
                  )} />
                  <Route path="/grid" component={GridComponent} />
                  <Route path="/user" component={UserComponent} />
                  <Route path="/documents" component={DocumentsComponent} /> 
                  <Route path="/search" component={SearchComponent} />
                  <Route path="/api" component={APIComponent} />
                  
                  {/* Add other routes here */}
                  <Redirect from="*" to="/" /> {/* Redirect unknown routes to home */}
                </Switch>
              </div>
            </div>
          </div>
        ) : (
          <Switch>
            <Route path="/login">
              <LoginPage setIsAuthenticated={setIsAuthenticated} />
            </Route>
            <Redirect to="/login" />
          </Switch>
        )}
      </Router>
    </ExtensionProvider>
  );
});

export default App;