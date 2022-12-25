import React from "react";
import Filter from "../Filter";
import Carousel from "./Carousel";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <h1>Hello errors</h1>
    </Container>
  );
};

export default Home;
