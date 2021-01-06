import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;

  padding: 30px;
  border-bottom: 1px solid black;

  display: flex;
  justify-content: space-around;
`;

const Header = () => {
  return (
    <Container>
      <Link to="/">home</Link>
      <Link to="/button">button page</Link>
      <Link to="/form">formpage</Link>
    </Container>
  );
};

export default Header;
