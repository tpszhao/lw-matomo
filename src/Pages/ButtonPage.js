import React, { useEffect } from "react";
import styled from "styled-components";
import { useMatomo } from "@datapunt/matomo-tracker-react";

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
  const { trackPageView, trackEvent } = useMatomo();

  useEffect(() => {
    trackPageView();
  }, []);

  const handleClick = () => {
    // Track click on button
    trackEvent({ category: "button", action: "click" });
  };
  return (
    <Container>
      <button onClick={handleClick}>click</button>
    </Container>
  );
};

export default ButtonPage;
