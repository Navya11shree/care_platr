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

              {/* Looker Content Area */}
              <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
                <Switch>
                  <Route exact path="/" render={() => (
                    <div style={{ flex: 1, display: 'flex', overflow: 'auto' }}>
                      <LookerEmbed folderId="117" />
                    </div>
                  )} />
                  <Route path="/chat" component={ChatComponent} />
                  {/* Add other routes here */}
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
