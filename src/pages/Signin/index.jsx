import React, { useState } from "react";
import { Container, Wrapper } from "./styled";
import { Input, Button } from "../../components/Generic";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const { mutate } = useMutation(
    () => {
      fetch("/public/auth/login").then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        console.log(res, "res");
      },
      onError: (res) => {
        console.log(res, "error");
      },
    }
  );

  const onSubmit = () => {
    console.log(email);
    console.log(pw);
    mutate();
  };

  return (
    <Container>
      <Wrapper>
        <Input
          onChange={({ target }) => setEmail(target?.value)}
          value={email}
          placeholder={"Email"}
        />
        <Input
          onChange={({ target }) => setPw(target?.value)}
          value={pw}
          placeholder={"Password"}
        />
        <Button onClick={onSubmit} type={"primary"}>
          Login
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Signin;
