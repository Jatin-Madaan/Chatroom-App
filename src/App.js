
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { useState } from 'react'
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    // BEM NAMING Convention
    <div className="App">
      { !user ? (
        <Login />
      ) : (
          <div className="app__body">
            <BrowserRouter>
              <Sidebar />
              <Switch>
                <Route exact path="/">
                  <Chat />
                </Route>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
              </Switch>

            </BrowserRouter>
          </div>
        )}

    </div>
  );
}

export default App;
