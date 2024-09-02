'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default () => {
    const router = useRouter();

    return (
        <div
            style={{
                top: "0",
                position: "fixed",
                height: "100vh",
                width: "100vw",
                background: "rgba(0, 0, 0, 0.4)",
                left: "0",
                padding: "100px",
            }}
        >
            <Image
                src="/af/next.svg"
                alt="Next.js logo"
                width={280}
                height={58}
                priority
            />
            <br />
            <button onClick={() => router.back()}>back</button>
        </div>
    )
}