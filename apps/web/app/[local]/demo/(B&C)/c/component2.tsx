'use client';
import { memo, useOptimistic, useState } from "react";


export default memo(({ func }: { func: Function }) => {

    return (
        <>
          <p><button onClick={()=>{
          let ele = document.getElementById("focusInput") as HTMLElement;
          ele.focus();
        }}>
          bu1
        </button ></p>
        <p><button onClick={()=>{
          func(Math.random());
        }}>
          bu2
        </button></p>
        </>

    )
})