import logo from './logo.svg';
import './App.css';
import Converter from "./components/Converter"

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
      </header> */}
      <h1>Currency Converter</h1>
      <div className="line">
        <Converter currencyA="USD" currencyB="BRL"></Converter>
        <Converter currencyA="BRL" currencyB="USD"></Converter>
      </div>
      <div className="line">
        <Converter currencyA="EUR" currencyB="BRL"></Converter>
        <Converter currencyA="BRL" currencyB="EUR"></Converter>
      </div>
      <div className="line">
        <Converter currencyA="CAD" currencyB="BRL"></Converter>
        <Converter currencyA="BRL" currencyB="CAD"></Converter>
      </div>
    </div>
  );
}

export default App;
