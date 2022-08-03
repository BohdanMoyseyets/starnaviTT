import React from 'react';
import { connect } from 'react-redux';
import { modeCreator } from '../../redux/squares-reducer';
import MySelect from './MySelect';

let mapStateToProps = (state) =>{
    return {
        mode: state.squares.mode,
        size: state.squares.size,
        squares: state.squares.squares
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        modeCreator: (text, number) => { dispatch(modeCreator(text, number)) }
    }
}


const MySelectContainer = connect(mapStateToProps, mapDispatchToProps)(MySelect);
export default MySelectContainer;