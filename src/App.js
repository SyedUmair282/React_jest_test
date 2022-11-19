import logo from './logo.svg';
import './App.css';
import Login from './component/login';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
        <ul>
          <li>hello</li>
          <li>there</li>
          <li>man</li>
        </ul>
        <h1 data-testid="mytestid">hello123</h1>
        <p title='sum'>{1+2}</p>
      </header> */}
      <Login/>
    </div>
  );
}

export default App;
