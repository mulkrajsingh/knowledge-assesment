import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";

type TProps = {
  children: ReactNode;
};

const Layout: FC<TProps> = ({ children }) => {
  return (
    <section>
      <Navbar />
      <main className="mt-14 p-4">{children}</main>
    </section>
  );
};

export default Layout;
