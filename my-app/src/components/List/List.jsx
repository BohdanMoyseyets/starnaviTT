import React from 'react';
import style_s from './List.module.css';

const List = (props) => {
    let list = props.squares.map( item => item.hovered===true ? <div key={item.id} className={style_s.list_i}>row {item.row} col {item.col}</div>: null);
    let sum = list.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);
    return (
        <div>
            {
                sum 
                ? <><h2>Hover Squares</h2>{list}</> 
                : null
            }
            
        </div>
    );
}
export default List;