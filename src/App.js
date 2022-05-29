import './App.css';
import React, {useState, useEffect} from "react"

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
  const [array, setArray] = useState([...Array(12+1).keys()].slice(1)); //['A','B','C','D','E','F']
  const [selected, setSelected] = useState([])

  const changeOrder = (e) => {
    setArray(shuffleArray(array))
    if (selected.includes(e.target.innerText)) {
      setScore(0)
      setSelected([])
      return;
    }
    let arr = selected.concat(e.target.innerText)
    setScore(score + 1)
    setSelected(arr)
  }

  const listItems = array.map(index => 
    <button className="card" onClick={changeOrder} key={index}>
      <strong>{index}</strong>
    </button>
  )
  return (
    <div className="Container">
      <div className='header'>
        <div className='header-left'>
          Memory Game
        </div>
        <div className='header-right'>
          score: {score}
        </div>
      </div>
      <div className='card-grid'>
        {listItems}
      </div>
    </div>
  );
}

export default App;
