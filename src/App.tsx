import React, { useState } from 'react';
import { ExtensionProvider } from '@looker/extension-sdk-react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNavBar from './TopNavBar';
import './tailwind.css';
import FolderList from './FolderList'; // Import FolderList component
import ChatComponent from './ChatComponent';
import LoginPage from './LoginPage';

const App = hot(() => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  console.log("App rendered, isAuthenticated:", isAuthenticated); // Debug log

  return (
    <ExtensionProvider>
      <Router>
        {isAuthenticated ? (
          <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: '1', display: 'flex' }}>
              <Sidebar />
              <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                <TopNavBar />
                <div style={{ flex: '1', padding: '1rem', display: 'flex', flexDirection: 'column' }}>
                  <Switch>
                    <Route exact path="/" component={FolderList} /> {/* Use FolderList component */}
                    <Route path="/chat" component={ChatComponent} />
                    {/* Add other routes here */}
                  </Switch>
                </div>
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
