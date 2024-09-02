'use client';
import { useCallback, useState } from "react";
import Component1 from "./component1";
import Component2 from "./component2";

export default () => {
    const [state, setState] = useState<number[]>([1,2]);
    function func(num:number) {
        console.log(`path: ${state.join(",")}`);
        setState([...state,num]);
    };
    const func2 = useCallback(func, [state]);

    return (
        <>
        {state.join(",")}
        <Component1></Component1>
        <Component2 func={func2}></Component2>
        </>
    )
}