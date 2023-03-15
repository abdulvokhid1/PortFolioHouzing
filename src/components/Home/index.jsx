import React from "react";
import Filter from "../Filter";
import Recommended from "../Home/Recommended";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Footer from "./Footer";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <Recommended />
      <Categories />
      <Footer />
    </Container>
  );
};

export default Home;
