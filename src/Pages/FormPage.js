import React, { useEffect } from "react";
import styled from "styled-components";
import { useMatomo } from "@datapunt/matomo-tracker-react";
import { useForm } from "react-hook-form";

const Container = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 50vw;
  height: 300px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonPage = () => {
  const { trackPageView, trackEvent } = useMatomo();
  const { register, errors, handleSubmit } = useForm();

  useEffect(() => {
    trackPageView();
  }, []);

  const onSubmit = (formData, e) => {
    e.preventDefault();
    trackEvent({ category: "form", action: "submit-form-success" });
  };
  return (
    <Container>
      <Form id="demo-form" onSubmit={handleSubmit(onSubmit)}>
        <p>name (required)</p>
        <input
          type="text"
          id="name"
          name="name"
          ref={register({ required: true })}
        />
        {errors.name && <p>name is requied</p>}
        <p>hobby</p>
        <input type="text" id="hobby" name="hobby" ref={register} />
        <input type="submit" value="submit" />
      </Form>
    </Container>
  );
};

export default ButtonPage;
