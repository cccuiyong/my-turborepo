'use client';
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";

export default function menu() {

  const path = usePathname();
  console.log(path);
  const local = path.split("/")[1];
  

    return <div>
      <div style={{ width: '200px',height: '2000px',float: 'left'}}>
      <Link href={'/'+local+'/demo/a'}> to demo/a</Link>
      <br />
      <Link href={'/'+local+'/demo/b'}>to demo/b</Link>
      <br />
      <Link href={'/'+local+'/demo/c'}>to demo/c</Link>
      </div>

    </div>
}