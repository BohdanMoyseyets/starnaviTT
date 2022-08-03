import React from 'react';
import './App.css';
import List from './components/List/List';
import MySelectContainer from './components/MySelect/MySelectContainer';
import SquaresContainer from './components/Squares/SquaresContainer';
import { connect } from 'react-redux';

const App = (props) =>{
  return (
    <div className="App">
      <div>
        <MySelectContainer store={props.store} />
        <SquaresContainer store={props.store}/>
      </div>
      <List squares={props.squares} />
    </div>
  );
}

let mapStateToProps = (state) =>{
  return {
      squares: state.squares.squares
  }
}

export default connect(mapStateToProps, {})(App);