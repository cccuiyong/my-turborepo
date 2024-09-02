import { ReactNode } from "react";

export default function Layout({ children, dialog } : {children: ReactNode, dialog: ReactNode}) {
  return (
    <>
      <div>
        {children}
        {dialog}
      </div>
    </>
  );
}