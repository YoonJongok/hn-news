import { Layout } from "antd";
import React from "react";
import { Container } from "../components/Container";
interface IMyArticle {}
const { Content } = Layout;

function MyArticle({}: IMyArticle) {
  return (
    <Container>
      <Content>
        <div>article</div>
      </Content>
    </Container>
  );
}
export default MyArticle;
