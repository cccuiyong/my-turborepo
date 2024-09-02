'use client';

import { useContext, useState } from "react";
import { context3 } from "../../context/context";

export default function Banner  () {

  const { theme, setTheme } = useContext(context3);

  return <><div id="div" style={{ backgroundColor : theme }}>横幅</div></>
};