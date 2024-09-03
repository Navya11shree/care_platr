import React, { useState } from 'react';
import { ExtensionProvider } from '@looker/extension-sdk-react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNavBar from './TopNavBar';
import './tailwind.css'; 
import LookerEmbed from './LookerEmbed';
import ChatComponent from './ChatComponent'; 
import LoginPage from './LoginPage'; 

const App = hot(() => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ExtensionProvider>
      <Router>
        {isAuthenticated ? (
          <div style={{ height: '100vh', display: 'flex' }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {/* Top Navigation Bar */}
              <TopNavBar />

              {/* Looker Content Area */}
              <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column' }}>
                <Switch>
                  <Route exact path="/" render={() => (
                    <div style={{ flex: 1, display: 'flex' }}>
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

export default App;