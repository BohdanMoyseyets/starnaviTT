import React, { useState, useEffect } from 'react';
import * as axios from "axios";
import style_s from './MySelect.module.css';

const MySelect = (props) => {
    const [option, setOption] = useState([]);
    const [btnDisable, setBtnDisable] = useState(true);
    const [fetching, setFetching] = useState(false);
    const [square, setSquare] = useState({mode: "", size: 0});
    // console.log(props)

    useEffect(() => {
        async function fetchData() {
            setFetching(true);
            const response = await axios.get(`http://demo7919674.mockable.io/`);
            setOption(response.data);
        }
        fetchData().catch(console.error);
        setFetching(false);


    }, []);

    const onChange = (e) => {
        setBtnDisable(false);
        setSquare(option.find(obj => {  return obj.name == e.target.value} ))

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(square.name, square.field);
        props.modeCreator(square.name, square.field);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={style_s.triangle_down}></div>
            <select disabled={fetching} onChange={onChange}>

                <option value="" disabled selected hidden>Pick mode</option>
                {
                    option.map(o => <option key={o.field} data-size={o.field} value={o.name}>{o.name}</option>)
                }

            </select>
            <input className={style_s.button} disabled={btnDisable} type="submit" value="start" />
        </form>
    );
};
export default React.memo(MySelect);