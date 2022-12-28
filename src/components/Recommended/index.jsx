import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import Card from "../Card";
import { Container, Wrapper, IconLeft, IconRight, Carousel } from "./style";
const Recommended = () => {
  const slider = useRef();
  const items = [
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
    <Card mr={20} />,
  ];
  return (
    <Container>
      <div className="title center">Recommended</div>
      <div className="description center">
        Siz izlagan va Siz orzu qilgan uyalar
      </div>
      <Wrapper>
        <Carousel>
          <AliceCarousel ref={slider} autoWidth items={items} />
          <IconLeft onClick={() => slider.current?.slidePrev()} />
          <IconRight onClick={() => slider.current?.slideNext()} />
        </Carousel>
      </Wrapper>
    </Container>
  );
};
export default Recommended;
