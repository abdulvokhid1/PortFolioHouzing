import styled from "styled-components";
import { ReactComponent as left } from "../../assets/icons/left.svg";
import { ReactComponent as right } from "../../assets/icons/rightarrow.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 96px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-top: 32px;
`;
const Carousel = styled.div`
  width: 1440px;
  display: flex;
  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    display: none !important;
  }
`;
const IconLeft = styled(left)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(100%, -50%);
  width: 45px;
  height: 45px;
  color: white;
  background: black;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.97;
  }
  &path {
    fill: #0d263b;
  }
`;
const IconRight = styled(right)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 100px;
  transform: translate(100%, -40%);
  width: 45px;
  height: 45px;
  color: black;
  background: black;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.97;
  }
  &path {
    fill: #0d263b;
  }
`;
export { Container, Wrapper, Carousel, IconLeft, IconRight };
