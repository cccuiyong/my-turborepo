import { LocalType } from "@repo/local/src/base";
import getLocal from "@repo/local/src/getLocal";
import Client from "./client";
export const generateStaticParams = ()=>[
  {
    local: 'cn',
  }, {
    local: 'en',
  }
]
export const dynamicParams =false;
export default function Home({params}:{params:{local: LocalType}}) {
  return (
    <div>
      <p>runtime env NAME: {process.env.timename}</p>
      <p>file env NAME: {process.env.NAME}</p>
      <div>{getLocal(params.local).password} <Client/></div>
    </div>
  );
}
