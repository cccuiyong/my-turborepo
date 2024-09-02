"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function demo() {
  const path = usePathname();
  const dataList = [1, 2, 3, 4];
  useEffect(() => {
    console.log(`客户端环境变量: ${process.env.NEXT_PUBLIC_NAME}`);
    console.log(dataList);
  }, []);
  const local = path.split("/")[1];
  return (
    <div>
      <p>客户端环境变量: {process.env.NEXT_PUBLIC_NAME}</p>
      {dataList.map((number, index) => (
        <div key={number} ><Link href={'/'+local+'/demo/a/item/'+number}>
          {number}
        </Link><br /></div>
      ))}
    </div>
  );
}
