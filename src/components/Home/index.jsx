import React from "react";
import Filter from "../Filter";
import Recommended from "../Home/Recommended";
import Carousel from "./Carousel";
import Categories from "./Categories";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommended />
      <Categories />
    </Container>
  );
};

export default Home;
