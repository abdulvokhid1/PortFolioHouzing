import React, { useRef } from "react";
import { Container, Img, IconRight, IconLeft, Wrapper } from "./style";
import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";
import img3 from "../../../assets/images/img3.png";

const Carousel = () => {
  const slider = useRef();
  return (
    <Wrapper>
      <IconLeft onClick={() => slider.current.prev()} />
      <IconRight onClick={() => slider.current.next()} />
      <Container dots ref={slider}>
        <Img src={img1} />
        <Img src={img2} />
        <Img src={img3} />
      </Container>
    </Wrapper>
  );
};

export default Carousel;
