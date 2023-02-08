import React, { useRef } from "react";
import { Container } from "./styled";
import { Input, Button } from "../../components/Generic";

const Signin = () => {
  const emailRef = useRef("");
  const pwRef = useRef("");

  return (
    <Container>
      <Input ref={emailRef} placeholder={"Email"} />
      <Input ref={pwRef} placeholder={"Password"} />
      <Button>Login</Button>
    </Container>
  );
};

export default Signin;
