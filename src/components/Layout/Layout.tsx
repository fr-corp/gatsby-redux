import React from "react";
import type { Container } from "@types";
import { Header } from "@components";

interface LayoutProps extends Container {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <h1>hello</h1>
    </div>
  );
};

export default Layout;
