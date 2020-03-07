import React, {useState, useEffect} from 'react';
import {CardList} from './components/card-list/card-list.component'
import logo from './images/nyt-logo.svg';
import './App.css';

function App() {

  const [state, setState] = useState({
    selection: ''
  })
  const [transition, setTransition] = useState(false)

  const [results, setResults] = useState([])
  console.log(state)
  const handleChange = e  => {
    setState({selection: e.target.value})
    state ? setTransition(true) : setTransition(false)
  }

  useEffect( ()=> {
    fetch(`https://api.nytimes.com/svc/topstories/v2/${state.selection}.json?api-key=WGAHEZGJPWfA9djV2CzpQQU35fl90WTT`)
      .then(response => response.json())
      .then(results => setResults(results.results))
  }, [state])

  return (
    <div className="container">
      <header className={state.selection ? "headerMove" : "headerStay"}>
        <img className={state.selection ? "imgGrowOn" : "imgGrowOff"} src={logo} 
 alt="logo" />
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
      </header>
      <section className={state.selection ? "gridOn" : "gridOff"}>
        {state.selection ? <CardList results={results}/> : null}
      </section>     
    </div>
  );
}

export default App;
