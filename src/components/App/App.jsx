import { Toaster } from 'react-hot-toast';

import './App.css';

import TweetCard from '../TweetCard/TweetCard';

function App() {

  return (
    <div className="App">
      <Toaster />
      <header className="App-header">
        <TweetCard/>
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
  );
}

export default App;
