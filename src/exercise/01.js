// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(currentCount, change){
  if(typeof change === 'function')
    return change(currentCount);
  else if(typeof change === typeof {})
    switch (change.type) {
      case 'INCREMENT':{
        return {...currentCount, count:change.step + currentCount.count};
      }
      default:
        throw Error("Undefined Behavior");
    }
  return change;
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
