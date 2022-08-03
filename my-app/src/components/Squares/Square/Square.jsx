import React from 'react';
import style_s from './Square.module.css';

const Square = (props) =>{
    return(
    <div onMouseEnter={() => props.hoverF(props.id)} className={style_s.square + " " + (props.hovered ? style_s.hovered : null) + " " + props.id}></div>
    );
}
export default Square;