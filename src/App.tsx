import React from 'react';
import { ExtensionProvider } from '@looker/extension-sdk-react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNavBar from './TopNavBar';
import './tailwind.css'; 
import LookerFolders from './LookerFolders';  // Updated import
import ChatComponent from './ChatComponent'; // Import ChatComponent

export const App = hot(() => (
  <ExtensionProvider>
    <Router>
      <div style={{ height: '100vh', display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <TopNavBar />
          <div style={{ flex: 1, padding: '1rem' }}>
            <Switch>
              <Route exact path="/" component={LookerFolders} />  {/* Updated route for LookerFolders */}
              <Route path="/chat" component={ChatComponent} /> {/* Route for ChatComponent */}
              {/* Add other routes here */}
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  </ExtensionProvider>
));
