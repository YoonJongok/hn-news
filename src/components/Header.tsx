import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const HeaderContainer = styled.header`
  width: 100%;
  height: 55px;
  padding: 0.3rem 1.2rem;
  background-color: ${(props) => props.theme.containerColor};
`;

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
`;
const Logo = styled.div`
  width: fit-content;
  height: 100%;
  text-align: center;

  a {
    color: black;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: fit-content;
  a {
    color: black;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
  }
`;
function Header() {
  return (
    <HeaderContainer>
      <SHeader>
        <Logo>
          <Link to={"/"}>News</Link>
        </Logo>
        <Nav>
          <Link to={"/my-article"}>my article</Link>
        </Nav>
      </SHeader>
    </HeaderContainer>
  );
}

export default Header;
