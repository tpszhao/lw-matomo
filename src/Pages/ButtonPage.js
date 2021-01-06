import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 50vw;
  height: 300px;
`;

const ButtonPage = () => {
  return (
    <Container>
      <button>click</button>
    </Container>
  );
};

export default ButtonPage;
