//import logo from './logo.svg';
import './App.css';


/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/


function App() {
  return (
    <div className={row}>
      <div className={column} style="background-color:#aaa;">
        <h2>Column 1</h2>
        <p>Some text..</p>
      </div>
      <div className={column} style="background-color:#bbb;">
        <h2>Column 2</h2>
        <p>Some text..</p>
      </div>
    </div>
  );
}

export default App;
