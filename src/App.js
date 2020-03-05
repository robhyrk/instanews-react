import React, {useState, useEffect} from 'react';
import {CardList} from './components/card-list/card-list.component'
import logo from './images/nyt-logo.svg';
import './App.css';

function App() {

  const [state, setState] = useState({
    selection: 'business'
  })

  const [results, setResults] = useState([])
  console.log(state)
  const handleChange = e  => {
    setState({selection: e.target.value})
  }

  useEffect( ()=> {
    fetch(`https://api.nytimes.com/svc/topstories/v2/${state.selection}.json?api-key=WGAHEZGJPWfA9djV2CzpQQU35fl90WTT`)
    .then(response => response.json())
    .then(results => setResults(results.results))
  }, [state])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <form>
        <label>
          <select value={state.selection} onChange={handleChange}>
            <option value="">Sections ...</option>
            <option value="home">Home</option>
            <option value="arts">Arts</option>
            <option value="business">Business</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
            <option value="fashion">Fashion</option>
          </select>
        </label>
        <p>You selected {state.selection}</p>
      </form>
      <CardList results={results}/>
    </div>
  );
}

export default App;
