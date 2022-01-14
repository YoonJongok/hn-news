import React, { useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import Header from "../components/Header";

const { Content, Footer } = Layout;
interface IHomeProps {}

export const Home = ({}: IHomeProps) => {
  useEffect(() => {
    (async () => {
      await fetch("http://hn.algolia.com/api/v1/items/1").then(async (res) =>
        console.log(await res.json())
      );
    })();
  }, []);
  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
