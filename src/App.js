
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM NAMING Convention
    <div className="App">
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
    </div>
  );
}

export default App;
