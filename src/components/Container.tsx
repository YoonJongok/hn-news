import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  height: 100%;
  max-width: 680px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 3rem 0;
  background-color: ${(props) => props.theme.backgroundColor};
`;
export const Container: React.FC = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Main>{children}</Main>
    </Layout>
  );
};
