import { Spin } from "antd";
import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;

function Loader() {
  return (
    <LoaderContainer>
      <Spin size="large" />
    </LoaderContainer>
  );
}

export default Loader;
