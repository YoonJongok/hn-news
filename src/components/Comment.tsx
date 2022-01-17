import React from "react";
import Text from "antd/lib/typography/Text";
import styled from "styled-components";
import { SArticle } from "./Article";

const CommentContainer = styled(SArticle)`
  padding-bottom: 0;
`;

interface IComment {
  author?: string;
  text?: string;
}
function Comment({ author, text }: IComment) {
  return (
    <CommentContainer>
      <Text style={{ color: "#34495e", marginBottom: "0.25em" }} strong>
        Commenter: <span style={{ color: "#2c3e50" }}>{author}</span>
      </Text>
      <p style={{ marginBottom: "50px", fontSize: "1.2em" }}>
        {text ? text.replace(/(<([^>]+)>)/gi, "").replace(/[^\w\s]/gi, "") : ""}
      </p>
    </CommentContainer>
  );
}

export default Comment;
