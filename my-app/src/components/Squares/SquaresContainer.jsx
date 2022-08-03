import React from 'react';
import { hoverCreator } from '../../redux/squares-reducer';
import { connect } from 'react-redux';
import Squares from './Squares';

let mapStateToProps = (state) =>{
    return {
        squares: state.squares.squares
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        hoverCreator: (id) => { dispatch(hoverCreator(id)) }
    }
}

const SquaresContainer = connect(mapStateToProps, mapDispatchToProps)(Squares);
export default SquaresContainer;