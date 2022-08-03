import React from 'react';
import './App.css';
import MySelectContainer from './components/MySelect/MySelectContainer';
import SquaresContainer from './components/Squares/SquaresContainer';

const App = (props) =>{
  return (
    <div className="App">
      <div>
        <MySelectContainer store={props.store} />
        <SquaresContainer store={props.store}/>
      </div>
      <div>
        <h2>Hover Squares</h2>
        <div>Empty</div>
      </div>


    </div>
  );
}

export default App;
