import React from 'react'; //for React
import { BrowserRouter as Link } from 'react-router-dom';
import './App.css';
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const headerstyle = {
  backgroundColor: 'grey',
  height: 70 
}
function App() {
  return (
    <div className="App">
      <nav className='nav-bar' id='nav-bar' style={headerstyle}>
        <header className='head-menu' id='header'>
        </header>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;