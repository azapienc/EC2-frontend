import logo from './logo.svg';
import './App.css';

function App() {
  const message = useState([]);

  useEffect(() => {
    fetch('localhost:8080')
      .then((response) => {
        return response.json()
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Greetings from the ether.
        </p>
        <p>
          {this.message}
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
  );
}

export default App;
