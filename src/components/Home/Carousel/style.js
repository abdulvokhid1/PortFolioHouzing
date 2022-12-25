import { Carousel } from "antd";
import styled from "styled-components";
import { ReactComponent as left } from "../../../assets/icons/left.svg";
import { ReactComponent as right } from "../../../assets/icons/rightarrow.svg";
const Wrapper = styled.div`
  position: relative;
`;

const Container = styled(Carousel)`
  width: 100%;
  /* height: 570px;  */
`;
const Img = styled.img`
  background: black;
  width: 100%;
  height: 570px;
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
export { Container, Img, IconLeft, IconRight, Wrapper };
