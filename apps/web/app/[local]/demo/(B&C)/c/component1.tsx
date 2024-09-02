"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useOptimistic, useState } from "react";
import { sc } from "./action";

export default () => {
  const [state, setState] = useState("");
  const [opt2, setOpt2] = useState("");
  const path = usePathname();
  const [opt, addOpt] = useOptimistic(opt2, (opt2, value: string) => {
    return value;
  });
  let local = path.split("/")[1];
  const submit = async (fd: FormData) => {
    addOpt("提交完了");
    sc(fd)
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        addOpt("");
      });
  };
  useEffect(() => {
    if (state === "999") {
      throw new Error(state);
    }
  }, [state]);
  return (
    <>
      <form action={submit}>
        <p>{opt}</p>
        <p>
          <input
            type="text"
            id={"focusInput"}
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
        </p>
        <p>
          <Link href={"/" + local + "/demo/c/" + state}>to c/id</Link>
        </p>
        <button type="submit">opt</button>
      </form>
    </>
  );
};
