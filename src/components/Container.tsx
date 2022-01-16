import React from "react";
import { Layout } from "antd";
import Header from "./Header";

const { Content, Footer } = Layout;

export const Container: React.FC = ({ children }) => {
  return (
    <Layout>
      <Header />
      {children}
    </Layout>
  );
};
