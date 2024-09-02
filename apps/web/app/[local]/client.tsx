'use client';

import { SetStateAction, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
export default () => {
    const [password, setPassword] = useState('');
    const router = useRouter();
    const path = usePathname();
    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async () => {
        if (password =='123') {
            router.push(path + '/demo');
        }else {
            router.push(path + '/123');
        }
    };

    return (
        <>
            <input type="password" value={password} onChange={handleChange}></input>
            <button onClick={handleSubmit}>
                Submit
            </button>
        </>
    )
}