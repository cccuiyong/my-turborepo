'use client'
import Banner from "./Banner";
import Menu from "./Menu";
import { ThemeProvider } from "../../context/context";

export default function Layout({ children } : {children: JSX.Element}) {

  return (
    <> 
      <ThemeProvider>
      <Banner></Banner>
      <Menu></Menu>
      <main>
        {children}
      </main>
      </ThemeProvider>
    </>
  );
}