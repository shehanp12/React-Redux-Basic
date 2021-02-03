import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {increment} from "./actions";

function App() {
    const  counter = useSelector(state => state.counter);
    const  isLogged = useSelector(state => state.isLogged );
    const dispath = useDispatch();
  return (
    <div className="App">
       <h1>Counter {counter}</h1>
        <button onClick={() => dispath(increment())}>+</button>
        <button>-</button>
        { isLogged ? <h1> Valubale Information</h1>: null}
    </div>
  );
}

export default App;
