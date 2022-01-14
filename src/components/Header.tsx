import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SearchOutlined } from "@ant-design/icons";
const AHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
  padding: 0.3rem 1.2rem;
  background-color: #ffffff;
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
interface FormData {
  searchKeyword: string;
}
function Header() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = () => {};

  return (
    <AHeader>
      <Logo>
        <Link to={"/about"}>News</Link>
      </Logo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("searchKeyword")}
          type="text"
          placeholder="Search news"
        />
        <button>
          <SearchOutlined />
        </button>
      </form>

      <Nav>
        <Link to={"/about"}>About</Link>
      </Nav>
    </AHeader>
  );
}

export default Header;