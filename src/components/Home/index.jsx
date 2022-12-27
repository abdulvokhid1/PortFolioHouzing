import React from "react";
import Card from "../Card";
import Filter from "../Filter";
import Carousel from "./Carousel";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Card />
    </Container>
  );
};

export default Home;
