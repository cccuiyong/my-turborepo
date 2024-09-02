'use client'
import { ReactNode, useContext, useState } from "react";
import LayoutClient from "./layoutClient";
import Link from "next/link";
import { context3 } from "../../../../context/context";

export default function Layout({ children, p1 } : {children: ReactNode, p1: ReactNode}) {
  const { theme, setTheme } = useContext(context3);
  return (
    <>
      <div>
        <LayoutClient/>
        <table style={{ border:1, backgroundColor : theme }}>
            <tbody>
                <tr>
                    <td colSpan={2}><Link href={'/cn/demo/b/bb'}>to bb</Link></td>
                </tr>
                <tr>
                    <td>{children}</td>
                    <td>{p1}</td>
                </tr>
            </tbody>
        </table>
      </div>
    </>
  );
}