'use client';

import { useState } from "react";

export default function myhook() {
  const [state, setState] = useState<number[]>([1,2,3,4,5]);
  return state;
}
