import './App.css'
import { useState } from 'react'
import Circle from './components/Circle'
import CircleComusingFuntion from './components/CircleComusingFunction'
import Square from './components/Square'

function App() {
const [count, setCount] = useState(0);

function handleincrease(){
  setCount(count+1);
}
function handledecrease(){
  setCount(count-1);
}

  
  return ( <>
  <h1>Hello Friends</h1>
  <p>Im Studing to develop</p>
  {count > 5 ? <div className='speed'>Your Going Too Speed Please Reduce Speed</div>: <div>Good speed</div>}
  <h1 id="count">{count}</h1>
  <button onClick={handledecrease} className='btn2' disabled={count < 1}>Click to decrease</button>
  <button onClick={handleincrease} className='btn1' disabled={count > 10}>Click to increase</button>
  <Circle label="1"/>
  <Square label="2"/>
  <CircleComusingFuntion label="3"/>
  </>
  )
}

export default App
