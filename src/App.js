
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM NAMING Convention
    <div className="App">
     <div className="app__body"> 
      <Sidebar />
      {/* Chat */}
     </div>
    </div>
  );
}

export default App;
