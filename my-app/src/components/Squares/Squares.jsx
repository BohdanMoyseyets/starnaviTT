import React , { useState }from 'react';
import Square from './Square/Square';
import style_s from './Squares.module.css';

const Squares = (props) =>{
    return(
    <div className={style_s.squares}>
        {
            props.squares.map( s => <Square key={s.id} id={s.id} hovered={s.hovered} hoverF={props.hoverCreator}/>)
        }

    </div>
    );
}
export default Squares;