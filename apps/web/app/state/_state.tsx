import { useState } from "react";

const [state, setState] = useState('');

export function setvalue(value: any) {
    setState(value);
}

export function getvalue() {
    return state;
}
