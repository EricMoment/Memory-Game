import './App.css';
import React, {useState} from "react"
import {flagIMGs} from "./flag/flags"

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array.slice()
}

function App() {
  const [score, setScore] = useState(0);
  const [array, setArray] = useState(flagIMGs); //['A','B','C','D','E','F']
  const [selected, setSelected] = useState([])
  const changeOrder = (e) => {
    setArray(shuffleArray(array))
    if (selected.includes(e.target.alt) || score >= 8) {
      setScore(0)
      setSelected([])
      return;
    }
    let arr = selected.concat(e.target.alt)
    setScore(score + 1)
    setSelected(arr)
  }

  const listItems = array.map((pic) => 
    <div className="card" onClick={changeOrder} key={pic}>
      <img src={pic} alt={pic}></img>
    </div>
  )
  return (
    <div className="Container">
      <div className='header'>
        <div className='header-left'>
          Memory Game
        </div>
        <div className='header-right'>
          Score: {score}
        </div>
      </div>
      <div className='card-grid'>
        {listItems}
      </div>
    </div>
  );
}

export default App;
