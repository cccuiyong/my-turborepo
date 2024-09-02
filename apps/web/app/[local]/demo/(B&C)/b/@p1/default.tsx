"use client";

import { useContext, useEffect, useState } from "react";
import { context3 } from "../../../../../context/context";

export default () => {
    const [state, setState] = useState('');
    const [span, setSpan] = useState('');
    const [color, setColor] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
    }
    const { theme, setTheme } = useContext(context3);
    useEffect(()=>{
        let ele = document.getElementById('span') as HTMLElement;
        if (ele.offsetWidth > 40) {
            setColor('red');
        } else {
            setColor('green');
        }
    },[span])
    
    return (
      <>
        <input type="text" value={state} onChange={onChange} />
        <br />
        <button
          onClick={() => {
            setSpan(state);
          }}
        >
          按钮1
        </button>
        <button
          onClick={() => {
            setTheme(state);
          }}
        >
          按钮2
        </button>
        <span id={"span"} style={{ backgroundColor: color }}>
          {span}
        </span>
      </>
    );
}