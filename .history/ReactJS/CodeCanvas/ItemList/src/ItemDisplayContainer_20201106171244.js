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


function ItemDisplayContainer() {
  return (
    <div className="row">
      <div className="column" style={{backgroundColor: '#AAA'}}>
        <h2>Column 1</h2>
        <p>Some text..</p>
      </div>
      <div className="column" style={{backgroundColor: '#BBB'}}>
        <h2>Column 2</h2>
        <p>Some text..</p>
      </div>
    </div>
  );
}

export default ItemDisplayContainer;
