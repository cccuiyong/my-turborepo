'use client';
import { usePathname } from "next/navigation";
import { useEffect } from "react";


export default () => {
    const path = usePathname();
    useEffect(() => {
        const listener = () => console.log('path', path);
        window.addEventListener('click', listener);
        return () => window.removeEventListener('click', listener);
    }, []);
    return <div>
    </div>
}